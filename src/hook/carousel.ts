import {useCallback, useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  scrollTo,
  useDerivedValue,
  runOnJS,
  runOnUI,
} from 'react-native-reanimated';

import {IInitCarouselValue, ICarouselControlValue} from './type';

function useProps() {
  const width = useSharedValue(0);
  const endX = useSharedValue(0);
  const directionForward = useSharedValue(true);

  const currentX = useSharedValue(0);
  const currentXVelocity = useSharedValue(0);
  //this value relies on direction
  const currentPanelIndex = useDerivedValue(() => {
    if (directionForward.value) {
      return currentX.value / width.value;
    } else {
      return (endX.value - currentX.value) / width.value;
    }
  });
  const getNextPanel = useCallback(() => {
    'worklet';
    return Math.min(
      (Math.floor(currentPanelIndex.value) + 1) * width.value,
      endX.value,
    );
  }, [currentPanelIndex, endX, width]);
  const getPrevPanel = useCallback(() => {
    'worklet';
    return Math.max((Math.floor(currentPanelIndex.value) - 1) * width.value, 0);
  }, [currentPanelIndex, width]);
  const getClosestPanel = useCallback(() => {
    'worklet';
    return Math.max(Math.round(currentPanelIndex.value) * width.value, 0);
  }, [currentPanelIndex, width]);
  const ref = useAnimatedRef<any>();
  const scrollToPos = useCallback(
    (pos: number) => {
      'worklet';
      scrollTo(ref, pos, 0, true);
    },
    [ref],
  );

  const prevPossible = useSharedValue(false);
  const nextPossible = useSharedValue(false);
  const [prevButtonProp, setPrevButtonProp] = useState({});
  const _setPrevButtonProp = useCallback(
    (pPrevPossible, pEndX, pDirectionForward) => {
      setPrevButtonProp({
        disabled: !pPrevPossible,
        onPress: () => {
          if (pDirectionForward) {
            runOnUI(scrollToPos)(getPrevPanel());
          } else {
            runOnUI(scrollToPos)(pEndX - getNextPanel());
          }
        },
      });
    },
    [getNextPanel, getPrevPanel, scrollToPos],
  );
  useDerivedValue(() => {
    runOnJS(_setPrevButtonProp)(
      prevPossible.value,
      endX.value,
      directionForward.value,
    );
  }, [_setPrevButtonProp]);

  const [nextButtonProp, setNextButtonProp] = useState({});
  const _setNextButtonProp = useCallback(
    (pNextPossible, pEndX, pDirectionForward) => {
      setNextButtonProp({
        disabled: !pNextPossible,
        onPress: () => {
          if (pDirectionForward) {
            runOnUI(scrollToPos)(getNextPanel());
          } else {
            runOnUI(scrollToPos)(pEndX - getPrevPanel());
          }
        },
      });
    },
    [getNextPanel, getPrevPanel, scrollToPos],
  );
  useDerivedValue(() => {
    runOnJS(_setNextButtonProp)(
      nextPossible.value,
      endX.value,
      directionForward.value,
    );
  }, [_setNextButtonProp]);

  const getTarget = useCallback(() => {
    'worklet';
    let nextPanel = 0;
    if (directionForward.value) {
      // blocks are grouped form start
      if (currentXVelocity.value > 0.5) {
        nextPanel = getNextPanel();
      } else if (currentXVelocity.value < -0.5) {
        nextPanel = getPrevPanel();
      } else {
        nextPanel = getClosestPanel();
      }
    } else {
      // blocks are grouped from end
      if (currentXVelocity.value < -0.5) {
        nextPanel = getNextPanel();
      } else if (currentXVelocity.value > 0.5) {
        nextPanel = getPrevPanel();
      } else {
        nextPanel = getClosestPanel();
      }
      nextPanel = endX.value - nextPanel;
    }
    return nextPanel;
  }, [
    currentXVelocity,
    directionForward,
    endX,
    getClosestPanel,
    getNextPanel,
    getPrevPanel,
  ]);
  const onLayout: (event: LayoutChangeEvent) => void = useCallback(
    (event: LayoutChangeEvent) => {
      width.value = event.nativeEvent.layout.width;
    },
    [width],
  );
  const onContentSizeChange: (w: number, h: number) => void = useCallback(
    w => {
      endX.value = w - width.value;
      prevPossible.value = false;
      nextPossible.value = endX.value > 0;
    },
    [endX, nextPossible, prevPossible, width],
  );

  const updateDirection = useCallback(
    event => {
      'worklet';
      if (event.contentOffset.x <= 0) {
        directionForward.value = true;
      }
      if (event.contentOffset.x >= endX.value) {
        directionForward.value = false;
      }
    },
    [directionForward, endX],
  );
  const updatePrevNextPossible = useCallback(
    event => {
      'worklet';
      prevPossible.value = event.contentOffset.x !== 0;
      nextPossible.value =
        event.contentOffset.x !==
        event.contentSize.width - event.layoutMeasurement.width;
    },
    [nextPossible, prevPossible],
  );
  const updateCurrentState = useCallback(
    event => {
      'worklet';
      currentXVelocity.value = event.velocity ? event.velocity.x : 0;
      currentX.value = event.contentOffset.x;
    },
    [currentX, currentXVelocity],
  );
  const onScroll = useAnimatedScrollHandler(
    {
      onEndDrag: event => {
        updateDirection(event);
        updateCurrentState(event);
        updatePrevNextPossible(event);
        scrollTo(ref, getTarget(), 0, true);
      },
      onMomentumBegin: () => {
        scrollTo(ref, getTarget(), 0, true);
      },
      onMomentumEnd: event => {
        updateDirection(event);
        updateCurrentState(event);
        updatePrevNextPossible(event);
      },
    },
    [],
  );
  return {
    width,
    containerListProp: {
      onLayout,
      onContentSizeChange,
      onScroll,
      ref,
      horizontal: true,
    },
    prevButtonProp,
    nextButtonProp,
  };
}

export default function useCarousel(
  initValue: IInitCarouselValue,
): ICarouselControlValue {
  const {width, containerListProp, nextButtonProp, prevButtonProp} = useProps();

  const listItemStyle = {
    width: width.value / initValue.pageSize,
    height: (width.value / initValue.pageSize) * initValue.aspectRatio,
  };
  return {
    containerListProp,
    listItemStyle,
    prevButtonProp,
    nextButtonProp,
  };
}
