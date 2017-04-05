import React, { PureComponent } from 'react';
import { View, AsyncStorage } from 'react-native';
import { basic } from 'styles';
import { Root } from 'containers';
import Storage from 'react-native-storage';

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
});
global.storage = storage;

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
