import {useCallback} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';

import {IInitCarouselValue, ICarouselControlValue} from './type';

function useContainerListProp() {
  const width = useSharedValue(0);
  const onLayout: (event: LayoutChangeEvent) => void = useCallback(
    (event: LayoutChangeEvent) => {
      width.value = event.nativeEvent.layout.width;
      console.log(width.value);
    },
    [width],
  );
  const ref = useAnimatedRef();
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      console.log(`[SCROLL] SCROLL! ${event.contentOffset.y}`);
    },
    onEndDrag: event => {
      console.log(`[SCROLL] END DRAG! ${event.contentOffset.y}`);
    },
    onMomentumBegin: event => {
      console.log(`[SCROLL] BEGIN MOMENTUM! ${event.contentOffset.y}`);
    },
    onMomentumEnd: event => {
      console.log(`[SCROLL] END MOMENTUM! ${event.contentOffset.y}`);
    },
  });
  return {
    width,
    ref,
    containerListProp: {onLayout, onScroll, ref, horizontal: true},
  };
}

export default function useCarousel(
  initValue: IInitCarouselValue,
): ICarouselControlValue {
  const {width, ref, containerListProp} = useContainerListProp();
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
