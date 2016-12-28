import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListDemo } from 'widgets';

import { basic } from 'styles';

class SecondScreen extends Component {
  render() {
    return (
      <View>
        <Text style={basic.pageTitle}> Second Screen</Text>
        <ListDemo />
      </View>
    );
  }
}

export default SecondScreen;
