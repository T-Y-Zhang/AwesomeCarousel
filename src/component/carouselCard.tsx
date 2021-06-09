import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {CardData} from '../type';

export default function CarouselCard({
  item,
  style,
  ...rest
}: {
  item: CardData;
  style: any;
}) {
  const [imageUri] = useState(
    item.images[Math.floor(Math.random() * item.images.length)],
  );
  return (
    <FastImage
      {...rest}
      style={style}
      source={{
        uri: imageUri,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
}
