import {delay} from './../util';
import {CardData} from './../type';

export const getCarouselData = async () => {
  await delay(1000);
  const data: CardData[] = [
    {
      title: 'first Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
      ],
    },
    {
      title: 'second Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sYabxp8Q12XyYOrWO5KU5su483Npdnvsdg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '3 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6QRasz2XjabN52dfHGcUBFIECTN43V32YA&usqp=CAU',
      ],
    },
    {
      title: '4 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGjgYdqVBg_HB8yCjd08xfeJyMZiABbfORQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi3Hk47U5V6b73ziCvxIm9338oUsnQmdiOg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '5 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNnz9Ola0gDN0IJLi3ezzjL1MTi5sbg4nqQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIb_xB-hIDmcfyrug4ZlcITsa46dK1XTfNmg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '6 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
      ],
    },
    {
      title: '7 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6QRasz2XjabN52dfHGcUBFIECTN43V32YA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '8 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbicLPmtwCQx8RMWpW91RpEW_48O3Go3llgg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '9 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
      ],
    },
    {
      title: '10 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi3Hk47U5V6b73ziCvxIm9338oUsnQmdiOg&usqp=CAU',
      ],
    },
    {
      title: '11 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrF0_2NhvR0JBfpmgEKkZ5HvMxf6CbKytEA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TApFAoN9LbaH5ilZ31HjlTSzhfooixtbrQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNnz9Ola0gDN0IJLi3ezzjL1MTi5sbg4nqQ&usqp=CAU',
      ],
    },
    {
      title: '12 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '13 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sYabxp8Q12XyYOrWO5KU5su483Npdnvsdg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsu_sqXXJzgiaiAOetccW-8ZUBK0nAmj6mA&usqp=CAU',
      ],
    },
    {
      title: '14 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '15 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TApFAoN9LbaH5ilZ31HjlTSzhfooixtbrQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNnz9Ola0gDN0IJLi3ezzjL1MTi5sbg4nqQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIb_xB-hIDmcfyrug4ZlcITsa46dK1XTfNmg&usqp=CAU',
      ],
    },
    {
      title: '16 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIb_xB-hIDmcfyrug4ZlcITsa46dK1XTfNmg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HX469J9TBTWoQTFAf3gVkQZSi9v4SYqQrg&usqp=CAU',
      ],
    },
    {
      title: '17 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrF0_2NhvR0JBfpmgEKkZ5HvMxf6CbKytEA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZikkFPs2l-cOKEkQTh1EgkN4lmCfOd0-FQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KO57lKEObIj7XSz_aZEpSGz3gD7EtjfjJA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '18 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFIitg3WMvh-kNkqfCdd8UATEkBw9S0ZQVw&usqp=CAU',
      ],
    },
    {
      title: '19 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '20 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8R_nxCLg-wjRV4_avX8-VQ_6jTvgbU6oQg&usqp=CAU',
      ],
    },
    {
      title: '21 Block',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ukppM2XgArR7MtxpPVzUDeXPGA-gcBoSug&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9t8_7OVxZECiCl90ihv1swvgIzWHPsdpfQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweZQQaD4b4EDvvIin9Pwu4Sy7T0E67ItOwg&usqp=CAU',
      ],
    },
  ];
  return data;
};
