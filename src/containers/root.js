import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import MainTabsContainer from './main-tabs-container';

import { basic } from 'styles';

const ROUTES = { MainTabsContainer };

class Root extends Component {
  configureScene = (route, routeStack) => {
    return Navigator.SceneConfigs.PushFromRight;
    // switch (route.name) {
    //   // case 'SecondScreen':
    //   //   return Navigator.SceneConfigs.FloatFromBottom;
    //   default:
    //     return Navigator.SceneConfigs.PushFromRight;
    // }
  }
  renderScene = (route, navigator) => {
    const Scene = ROUTES[route.name];
    return <Scene {...route} navigator={navigator} />;
  }
  render() {
    return (
      <View style={basic.container}>
        <Navigator
          initialRoute={{ name: 'MainTabsContainer' }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    );
  }
}

export default Root;
