import React, { PureComponent } from 'react';
import { View, Navigator, AppState } from 'react-native';
import { basic } from 'styles';
import { PushScreen } from 'screens';
import MainTabsContainer from './main-tabs-container';

const ROUTES = { MainTabsContainer, PushScreen };

class Root extends PureComponent {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  handleAppStateChange = (nextAppState) => {
    console.log('handleAppStateChange:', nextAppState);
  }
  configureScene = (route, routeStack) => {
    return Navigator.SceneConfigs.FloatFromBottom;
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
          initialRoute={{ name: 'MainTabsContainer', index: 0 }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    );
  }
}

export default Root;
