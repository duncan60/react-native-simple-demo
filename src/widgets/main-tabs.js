import React, { PureComponent } from 'react';
import { Tabs, Tab, Icon } from 'react-native-elements';

class MainTabs extends PureComponent {
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
          renderIcon={() => <Icon name="home" size={26} />}
          renderSelectedIcon={() => <Icon name="home" size={26} />}
          onPress={() => this.handleSwitchTab(0)}
        >
          {renderTab(0)}
        </Tab>
        <Tab
          selected={screen === 1}
          title={screen === 1 ? 'List' : null}
          renderIcon={() => <Icon name="list" size={26} />}
          renderSelectedIcon={() => <Icon name="list" size={26} />}
          onPress={() => this.handleSwitchTab(1)}
        >
          {renderTab(1)}
        </Tab>
        <Tab
          selected={screen === 2}
          title={screen === 2 ? 'other' : null}
          renderIcon={() => <Icon name="info" size={26} />}
          renderSelectedIcon={() => <Icon name="info" size={26} />}
          onPress={() => this.handleSwitchTab(2)}
        >
          {renderTab(2)}
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
