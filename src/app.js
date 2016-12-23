import React, { Component } from 'react';
import { View } from 'react-native';
import { basic } from 'styles';
import { ComponentDemo } from 'containers';

class App extends Component {
  render() {
    return (
      <View style={basic.pagePadding}>
        <ComponentDemo />
      </View>
    );
  }
}

export default App;
