import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonDemo } from 'widgets';
import { basic } from 'styles';

let styles;

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={basic.pageTitle}> First Screen</Text>
        <ButtonDemo />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FirstScreen;
