import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { basic } from 'styles';

class PushScreen extends Component {
  onPopNavgator = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={basic.container}>
        <Text style={basic.pageTitle}> push Screen</Text>
        <Text
          style={basic.pageTitle}
          onPress={this.onPopNavgator}
        >
          back
        </Text>
      </View>
    );
  }
}

PushScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default PushScreen;
