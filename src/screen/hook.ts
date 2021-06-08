import {useEffect, useState} from 'react';

import {getCarouselData} from '../api';
import {CardData} from '../type';

export const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState<CardData[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getCarouselData();
      setCarouselData(data);
    })();
  }, [setCarouselData]);
  return carouselData;
};
