import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { ButtonDemo } from 'widgets';

import { basic } from 'styles';

class FirstScreen extends PureComponent {
  onPushNavigator = () => {
    this.props.navigator.push({
      name: 'PushScreen',
    });
  }
  render() {
    return (
      <View style={basic.container}>
        <View style={basic.header}>
          <Text style={basic.headerTitle}> First Screen </Text>
        </View>
        <View style={basic.pageWarp}>
          <ButtonDemo pressHandler={this.onPushNavigator} />
        </View>
      </View>
    );
  }
}

FirstScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default FirstScreen;
