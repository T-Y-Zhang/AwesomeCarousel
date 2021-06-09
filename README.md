# AwesomeCarousel

Show case of using useCarousel hook.

useCarousel hook exports four state which can be used to create carousel.

-`containerListProp`, `listItemStyle`, `prevButtonProp`, `nextButtonProp`

Example usecase:

````
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
````

You can find this in `src/screen/carouselScreen.tsx`.

1. You need to use `AnimatedFlatList`, and pass `{...containerListProp}` as props.
2. Pass `{...prevButtonProp}`, `{...nextButtonProp}` as prev and next button props. Which has disabled and onPress.
3. pass `listItemStyle` as style for rowItem.
