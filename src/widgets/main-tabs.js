import React, { PureComponent } from 'react';
import { Tabs, Tab, Icon } from 'react-native-elements';

class MainTabs extends PureComponent {
  handleSwitchTab = (idx) => {
    this.props.onSwitchTab(idx);
  }
  renderTabs = () => {
    const { screen, screens } = this.props;
    return screens.map((sc, idx) =>
      <Tab
        key={idx}
        selected={screen === idx}
        title={sc.title}
        renderIcon={() => <Icon name={sc.icon} size={26} />}
        renderSelectedIcon={() => <Icon color={'#6296f9'} name={sc.icon} size={26} />}
        onPress={() => this.handleSwitchTab(idx)}
      >
        {sc.screen}
      </Tab>,
    );
  }
  render() {
    return (
      <Tabs>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

MainTabs.propTypes = {
  screen: React.PropTypes.number.isRequired,
  onSwitchTab: React.PropTypes.func.isRequired,
  screens: React.PropTypes.array.isRequired,
};

export default MainTabs;
