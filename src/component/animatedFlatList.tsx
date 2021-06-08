import React, {forwardRef} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import Animated from 'react-native-reanimated';

const FlatListWithEventThrottle = forwardRef((props, ref) => (
  <FlatList
    {...props}
    scrollEventThrottle={1}
    // @ts-ignore
    ref={ref}
  />
));

export default Animated.createAnimatedComponent<FlatListProps<any>>(
  // @ts-ignore
  FlatListWithEventThrottle,
);
