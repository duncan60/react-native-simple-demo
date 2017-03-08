import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    backgroundColor: '#97CAE5',
  },
  slide3: {
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class SwiperDemo extends PureComponent {
  onLayout = (event) => {
    console.log('event.nativeEvent.layout', event.nativeEvent.layout);
  }
  render() {
    return (
      <Swiper
        onLayout={this.onLayout}
        showsButtons
        style={styles.wrapper}
        onMomentumScrollEnd={(e, state) => {
          console.log('index:', state.index);
        }}
        loop={false}
      >
        <View style={[styles.slide1, styles.slide]}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={[styles.slide2, styles.slide]}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={[styles.slide3, styles.slide]}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

export default SwiperDemo;
