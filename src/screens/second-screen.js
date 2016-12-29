import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListDemo } from 'widgets';

import { basic } from 'styles';

class SecondScreen extends Component {
  onPushNavigator = () => {
    this.props.navigator.push({
      name: 'PushScreen',
    });
  }
  render() {
    return (
      <View style={basic.container}>
        <Text style={basic.pageTitle}> Second Screen</Text>
        <ListDemo itemPress={this.onPushNavigator} />
      </View>
    );
  }
}

SecondScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default SecondScreen;
