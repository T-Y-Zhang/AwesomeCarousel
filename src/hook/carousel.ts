import {useCallback, useState} from 'react';
import {LayoutChangeEvent, Platform} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  scrollTo,
  useDerivedValue,
  runOnJS,
  runOnUI,
  withTiming,
} from 'react-native-reanimated';

import {IInitCarouselValue, ICarouselControlValue} from './type';

function useProps(initValue: IInitCarouselValue) {
  const timing = useSharedValue(0);
  const ref = useAnimatedRef<any>();
  const width = useSharedValue(0);
  const endX = useSharedValue(0);
  const directionForward = useSharedValue(true);
  const onLayout: (event: LayoutChangeEvent) => void = useCallback(
    (event: LayoutChangeEvent) => {
      width.value = event.nativeEvent.layout.width;
    },
    [width],
  );

  const currentX = useSharedValue(0);
  const currentXVelocity = useSharedValue(0);
  const getCurrentPanelIndex = useCallback(
    (pCurrentX, pWidth, pEndX, pDirectionForward) => {
      'worklet';
      if (pDirectionForward) {
        return pCurrentX / pWidth;
      } else {
        return (pEndX - pCurrentX) / pWidth;
      }
    },
    [],
  );
  const getNextPanel = useCallback(() => {
    'worklet';
    return Math.min(
      (Math.floor(
        getCurrentPanelIndex(
          currentX.value,
          width.value,
          endX.value,
          directionForward.value,
        ),
      ) +
        1) *
        width.value,
      endX.value,
    );
  }, [currentX, directionForward, endX, getCurrentPanelIndex, width]);
  const getPrevPanel = useCallback(() => {
    'worklet';
    return Math.max(
      (Math.ceil(
        getCurrentPanelIndex(
          currentX.value,
          width.value,
          endX.value,
          directionForward.value,
        ),
      ) -
        1) *
        width.value,
      0,
    );
  }, [currentX, directionForward, endX, getCurrentPanelIndex, width]);
  const getClosestPanel = useCallback(() => {
    'worklet';
    return Math.min(
      Math.max(
        Math.round(
          getCurrentPanelIndex(
            currentX.value,
            width.value,
            endX.value,
            directionForward.value,
          ),
        ) * width.value,
        0,
      ),
      endX.value,
    );
  }, [currentX, directionForward, endX, getCurrentPanelIndex, width.value]);

  const prevPossible = useSharedValue(false);
  const nextPossible = useSharedValue(false);

  const updateDirection = useCallback(
    pos => {
      'worklet';
      if (pos <= 0) {
        directionForward.value = true;
      }
      if (pos >= endX.value) {
        directionForward.value = false;
      }
    },
    [directionForward, endX],
  );
  const updatePrevNextPossible = useCallback(
    pos => {
      'worklet';
      prevPossible.value = pos > 0;
      nextPossible.value = pos < endX.value - 0.2;
    },
    [endX, nextPossible, prevPossible],
  );
  const updateCurrentState = useCallback(
    (velocity, pos) => {
      'worklet';
      if (Platform.OS === 'android') {
        currentXVelocity.value = -velocity;
      } else {
        currentXVelocity.value = velocity;
      }
      currentX.value = pos;
    },
    [currentX, currentXVelocity],
  );

  const scrollToPos = useCallback(
    (pos: number) => {
      'worklet';
      scrollTo(ref, pos, 0, true);
      updateCurrentState(0, pos);
      updateDirection(pos);
      updatePrevNextPossible(pos);
    },
    [ref, updateCurrentState, updateDirection, updatePrevNextPossible],
  );

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
  useDerivedValue(() => {
    if (!endX.value) {
      endX.value = Math.max(
        (width.value / initValue.pageSize) * initValue.itemCount - width.value,
        0,
      );
      prevPossible.value = false;
      nextPossible.value = endX.value > 0;
    }
  }, [initValue.itemCount, initValue.pageSize]);

  const onScroll = useAnimatedScrollHandler(
    {
      onEndDrag: event => {
        updateCurrentState(event.velocity?.x, event.contentOffset.x);
        updateDirection(event.contentOffset.x);
        updatePrevNextPossible(event.contentOffset.x);
        if (event.velocity!.x === 0) {
          scrollToPos(getTarget());
        }
      },
      onMomentumBegin: () => {
        timing.value = withTiming(timing.value + 1, {duration: 1}, () => {
          scrollToPos(getTarget());
        });
      },
      onMomentumEnd: event => {
        updateCurrentState(event.velocity?.x, event.contentOffset.x);
        updateDirection(event.contentOffset.x);
        updatePrevNextPossible(event.contentOffset.x);
      },
    },
    [],
  );
  return {
    width,
    containerListProp: {
      onLayout,
      decelerationRate: 1,
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
  const {width, containerListProp, nextButtonProp, prevButtonProp} =
    useProps(initValue);

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
