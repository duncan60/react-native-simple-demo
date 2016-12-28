import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

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
      <View style={styles.container}>
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
  container: {
    height: 500,
  },
});

export default ButtonDemo;
