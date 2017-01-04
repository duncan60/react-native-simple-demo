import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

let styles;

class ButtonDemo extends Component {
  pressHandler = () => {
    this.props.pressHandler();
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
          title="Push Screen"
          onPress={this.pressHandler}
        />

        <Button
          large
          iconRight
          buttonStyle={styles.mb}
          backgroundColor="#397af8"
          icon={{ name: 'squirrel', type: 'octicon' }}
          title="long press"
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

ButtonDemo.propTypes = {
  pressHandler: React.PropTypes.func.isRequired,
};

styles = StyleSheet.create({
  mb: {
    marginBottom: 10,
  },
  container: {
    height: 500,
  },
});

export default ButtonDemo;
