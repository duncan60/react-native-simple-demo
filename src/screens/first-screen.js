import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonDemo } from 'widgets';

import { basic } from 'styles';

class FirstScreen extends Component {
  render() {
    return (
      <View style={basic.container}>
        <Text style={basic.pageTitle}> First Screen</Text>
        <ButtonDemo />
      </View>
    );
  }
}

export default FirstScreen;
