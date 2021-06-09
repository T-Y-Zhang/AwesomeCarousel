import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//hooks
import useCarousel from './../hook/carousel';
import {useCarouselData} from './hook';

//components
import AnimatedFlatList from '../component/animatedFlatList';
import CarouselCard from '../component/carouselCard';

//type
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
    return <CarouselCard item={item} style={listItemStyle} />;
  };
  return (
    <View style={{...styles.container, ...style}} {...rest}>
      <Text>Carousel Example</Text>
      <AnimatedFlatList
        {...containerListProp}
        data={carouselData}
        style={styles.content}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity style={styles.button} {...prevButtonProp}>
        <Text>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} {...nextButtonProp}>
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
  button: {
    backgroundColor: 'cyan',
    borderRadius: 2,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default CarouselScreen;
