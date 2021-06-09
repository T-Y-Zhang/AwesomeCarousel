import {FlatList, FlatListProps} from 'react-native';
import Animated from 'react-native-reanimated';

export default Animated.createAnimatedComponent<FlatListProps<any>>(FlatList);
