import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { basic } from 'styles';

let styles;

class PushScreen extends Component {
  onPopNavgator = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={basic.container}>
        <View style={basic.header}>
          <View style={styles.arrowLeft}>
            <Icon
              name="keyboard-arrow-left"
              onPress={this.onPopNavgator}
            />
          </View>
          <Text style={basic.headerTitle}>
            Push Screen
          </Text>
        </View>
        <Text>
          Push Screen
        </Text>
      </View>
    );
  }
}

PushScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

styles = StyleSheet.create({
  arrowLeft: {
    position: 'absolute',
    left: 6,
    top: 24,
    zIndex: 2,
    //marginBottoms: 10,
  },

});

export default PushScreen;
