import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FirstScreen, SecondScreen } from 'screens';
import { MainTabs } from 'widgets';

let styles;

class MainTabsContainer extends Component {
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
  renderTab = (idx) => {
    const { navigator } = this.props;
    switch (idx) {
      case 0:
        return <FirstScreen navigator={navigator} />;
      case 1:
        return <SecondScreen navigator={navigator} />;
      default:
        return null;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MainTabs
          {...this.state}
          {...this.props}
          onSwitchTab={this.switchTabHandler}
          renderTab={this.renderTab}
        />
      </View>
    );
  }
}

// MainTabsContainer.propTypes = {
//   navigator: React.PropTypes.object.isRequired,
// };

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainTabsContainer;
