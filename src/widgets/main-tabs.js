import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

let { height } = Dimensions.get('window');
let styles;

class MainTabs extends Component {
  handleSwitchTab = (idx) => {
    this.props.onSwitchTab(idx);
  }
  render() {
    const { renderTab, screen } = this.props;
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={screen === 0}
          title="First"
          style={styles.item}
          onPress={() => this.handleSwitchTab(0)}
        >
          {renderTab(0)}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={screen === 1}
          title="Second"
          style={styles.item}
          onPress={() => this.handleSwitchTab(1)}
        >
          {renderTab(1)}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

MainTabs.propTypes = {
  screen: React.PropTypes.number.isRequired,
  onSwitchTab: React.PropTypes.func.isRequired,
  renderTab: React.PropTypes.func.isRequired,
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: height - 49,
  },
});
export default MainTabs;
