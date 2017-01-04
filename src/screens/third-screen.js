import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OtherDemo } from 'widgets';

import { basic } from 'styles';

class ThirdScreen extends Component {

  render() {
    return (
      <View style={basic.container}>
        <View style={basic.header}>
          <Text style={basic.headerTitle}> Third Screen </Text>
        </View>
        <OtherDemo />
      </View>
    );
  }
}

// ThirdScreen.propTypes = {
//   navigator: React.PropTypes.object.isRequired,
// };

export default ThirdScreen;
