import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { basic } from 'styles';

let styles;

class ButtonDemo extends Component {
  pressHandler = () => {
    console.log('button press console');
  }
  longPressHandler = () => {
    console.log('button long press console');
  }
  render() {
    return (
      <View>
        <Text style={basic.pageTitle}> Button Demo</Text>
        <Button
          raised
          buttonStyle={styles.mb}
          icon={{ name: 'cached' }}
          title="RAISED WITH ICONxx"
          onPress={this.pressHandler}
        />

        <Button
          large
          iconRight
          buttonStyle={styles.mb}
          backgroundColor="#397af8"
          icon={{ name: 'squirrel', type: 'octicon' }}
          title="OCTICON"
          onLongPress={this.longPressHandler}
        />
        <SocialIcon
          light
          type="medium"
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  mb: {
    marginBottom: 10,
  },
});

export default ButtonDemo;
