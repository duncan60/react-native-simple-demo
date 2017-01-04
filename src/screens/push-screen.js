import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Card } from 'react-native-elements';

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
        <Card
          title="Wonder Woman"
          containerStyle={{ flex: 1 }}
          wrapperStyle={{ flex: 1 }}
          image={require('../assets/images/wonder_woman.png')}
        >
          <Text>
            神力女超人是一位亞馬遜（基於希臘神話中的亞馬遜）的戰士公主，在她的家鄉被稱作新米西亞的黛安娜公主（英語：Princess Diana of Themyscira）
          </Text>
        </Card>
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
  },

});

export default PushScreen;
