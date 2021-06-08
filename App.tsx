import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import CarouselScreen from './src/screen/carouselScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CarouselScreen style={styles.content} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
});

export default App;
