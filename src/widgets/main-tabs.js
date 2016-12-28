import React, { Component } from 'react';
import { Tabs, Tab, Icon } from 'react-native-elements';

class MainTabs extends Component {
  handleSwitchTab = (idx) => {
    this.props.onSwitchTab(idx);
  }
  render() {
    const { renderTab, screen } = this.props;
    return (
      <Tabs>
        <Tab
          selected={screen === 0}
          title={screen === 0 ? 'Button' : null}
          renderIcon={() => <Icon name="whatshot" size={26} />}
          renderSelectedIcon={() => <Icon name="whatshot" size={26} />}
          onPress={() => this.handleSwitchTab(0)}
        >
          {renderTab(0)}
        </Tab>
        <Tab
          selected={screen === 1}
          title={screen === 1 ? 'List' : null}
          renderIcon={() => <Icon name="important-devices" size={26} />}
          renderSelectedIcon={() => <Icon name="important-devices" size={26} />}
          onPress={() => this.handleSwitchTab(1)}
        >
          {renderTab(1)}
        </Tab>
      </Tabs>
    );
  }
}

MainTabs.propTypes = {
  screen: React.PropTypes.number.isRequired,
  onSwitchTab: React.PropTypes.func.isRequired,
  renderTab: React.PropTypes.func.isRequired,
};

export default MainTabs;
