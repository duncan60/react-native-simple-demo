import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { basic } from 'styles';
import { Root } from 'containers';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

class App extends PureComponent {
  render() {
    return (
      <View style={basic.app}>
        <Root />
      </View>
    );
  }
}

export default App;
