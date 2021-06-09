import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

//hooks
import useCarousel from './../hook/carousel';
import {useCarouselData} from './hook';

//components
import AnimatedFlatList from '../component/animatedFlatList';

//types
import {CardData} from '../type';

export interface CarouselScreenProps {
  [x: string]: any;
  style: any;
}

const CarouselScreen: React.FC<CarouselScreenProps> = ({style, ...rest}) => {
  const carouselData = useCarouselData();
  const {containerListProp, listItemStyle, prevButtonProp, nextButtonProp} =
    useCarousel({
      pageSize: 4,
      loop: false,
      pagenation: true,
      aspectRatio: 1,
      itemCount: carouselData.length,
    });
  const renderItem = ({item}: {item: CardData}) => {
    return (
      <FastImage
        key={item.title}
        style={listItemStyle}
        source={{
          uri: item.images[Math.floor(Math.random() * item.images.length)],
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  };
  return (
    <View style={{...styles.container, ...style}} {...rest}>
      <Text>Carousel Example</Text>
      <AnimatedFlatList
        {...containerListProp}
        data={carouselData}
        style={styles.content}
        renderItem={renderItem}
        keyExtractor={item => {
          item.title;
        }}
      />
      <TouchableOpacity {...prevButtonProp}>
        <Text>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity {...nextButtonProp}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  content: {
    flex: 1,
    width: '100%',
  },
});

export default CarouselScreen;
