import {useCallback} from 'react';
import {LayoutChangeEvent, NativeScrollEvent} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  scrollTo,
} from 'react-native-reanimated';

import {IInitCarouselValue, ICarouselControlValue} from './type';

function useContainerListProp(initValue: IInitCarouselValue) {
  const width = useSharedValue(0);
  const directionForward = useSharedValue(true);
  const currentXVelocity = useSharedValue(0);
  const getNextPanel = useCallback((currentPanelIndex, endX, contentWidth) => {
    'worklet';
    return Math.min((Math.floor(currentPanelIndex) + 1) * contentWidth, endX);
  }, []);
  const getPrevPanel = useCallback((currentPanelIndex, contentWidth) => {
    'worklet';
    return Math.max((Math.floor(currentPanelIndex) - 1) * contentWidth, 0);
  }, []);
  const getClosestPanel = useCallback((currentPanelIndex, contentWidth) => {
    'worklet';
    return Math.max(Math.round(currentPanelIndex) * contentWidth, 0);
  }, []);

  const getTarget = useCallback(
    (event: NativeScrollEvent) => {
      'worklet';
      const currentX = event.contentOffset.x;
      const contentWidth = event.layoutMeasurement.width;
      const endX = event.contentSize.width - event.layoutMeasurement.width;

      let currentPanelIndex = 0;
      let nextPanel = 0;
      if (directionForward.value) {
        // blocks are grouped form start
        currentPanelIndex = currentX / contentWidth;
        if (currentXVelocity.value > 1) {
          nextPanel = getNextPanel(currentPanelIndex, endX, contentWidth);
        } else if (currentXVelocity.value < -1) {
          nextPanel = getPrevPanel(currentPanelIndex, contentWidth);
        } else {
          nextPanel = getClosestPanel(currentPanelIndex, contentWidth);
        }
      } else {
        // blocks are grouped from end
        currentPanelIndex = (endX - currentX) / contentWidth;
        if (currentXVelocity.value < -1) {
          nextPanel = getNextPanel(currentPanelIndex, endX, contentWidth);
        } else if (currentXVelocity.value > 1) {
          nextPanel = getPrevPanel(currentPanelIndex, contentWidth);
        } else {
          nextPanel = getClosestPanel(currentPanelIndex, contentWidth);
        }
        nextPanel = endX - nextPanel;
      }
      if (nextPanel === 0) {
        directionForward.value = true;
      } else if (nextPanel === endX) {
        directionForward.value = false;
      }
      return nextPanel;
    },
    [
      currentXVelocity,
      directionForward,
      getClosestPanel,
      getNextPanel,
      getPrevPanel,
    ],
  );
  const onLayout: (event: LayoutChangeEvent) => void = useCallback(
    (event: LayoutChangeEvent) => {
      width.value = event.nativeEvent.layout.width;
    },
    [width],
  );
  const ref = useAnimatedRef<any>();
  const onScroll = useAnimatedScrollHandler(
    {
      onEndDrag: event => {
        currentXVelocity.value = event.velocity ? event.velocity.x : 0;
        scrollTo(ref, getTarget(event), 0, true);
      },
      onMomentumBegin: event => {
        scrollTo(ref, getTarget(event), 0, true);
      },
    },
    [initValue.itemCount, initValue.pageSize],
  );
  return {
    width,
    containerListProp: {onLayout, onScroll, ref, horizontal: true},
  };
}

export default function useCarousel(
  initValue: IInitCarouselValue,
): ICarouselControlValue {
  const {width, containerListProp} = useContainerListProp(initValue);

  const listItemStyle = {
    width: width.value / initValue.pageSize,
    height: (width.value / initValue.pageSize) * initValue.aspectRatio,
  };
  const prevButtonProp = {};
  const nextButtonProp = {};
  return {
    containerListProp,
    listItemStyle,
    prevButtonProp,
    nextButtonProp,
  };
}
