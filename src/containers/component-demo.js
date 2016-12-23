import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonDemo } from 'widgets';

class ComponentDemo extends Component {
  pressHandler = () => {
    console.log('button press console');
  }
  longPressHandler = () => {
    console.log('button long press console');
  }
  render() {
    return (
      <View>
        <ButtonDemo />
      </View>
    );
  }
}

export default ComponentDemo;
