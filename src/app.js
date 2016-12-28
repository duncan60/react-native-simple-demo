import React, { Component } from 'react';
import { View } from 'react-native';
import { basic } from 'styles';
import { Root } from 'containers';

class App extends Component {
  render() {
    return (
      <View style={basic.app}>
        <Root />
      </View>
    );
  }
}

export default App;
