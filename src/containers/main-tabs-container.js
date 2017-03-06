import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { FirstScreen, SecondScreen, ThirdScreen } from 'screens';
import { MainTabs } from 'widgets';

import { basic } from 'styles';

class MainTabsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
    };
  }
  switchTabHandler = (idx) => {
    this.setState({
      screen: idx,
    });
  }
  render() {
    const { navigator } = this.props;
    const screens = [
      {
        title: 'home',
        icon: 'home',
        screen: <FirstScreen navigator={navigator} />,
      },
      {
        title: 'List',
        icon: 'list',
        screen: <SecondScreen navigator={navigator} />,
      },
      {
        title: 'Swiper',
        icon: 'pageview',
        screen: <ThirdScreen navigator={navigator} />,
      },
    ];
    return (
      <View style={basic.container}>
        <MainTabs
          {...this.state}
          {...this.props}
          screens={screens}
          onSwitchTab={this.switchTabHandler}
        />
      </View>
    );
  }
}

MainTabsContainer.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default MainTabsContainer;
