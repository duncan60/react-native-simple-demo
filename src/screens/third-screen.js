import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { SwiperDemo } from 'widgets';

import { basic } from 'styles';

class ThirdScreen extends PureComponent {
  render() {
    return (
      <View style={basic.container}>
        <View style={basic.header}>
          <Text style={basic.headerTitle}> Third Screen </Text>
        </View>
        <SwiperDemo />
      </View>
    );
  }
}

// ThirdScreen.propTypes = {
//   navigator: React.PropTypes.object.isRequired,
// };

export default ThirdScreen;
