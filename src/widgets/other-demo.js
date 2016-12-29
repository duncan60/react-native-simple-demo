import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonGroup, CheckBox, FormLabel, FormInput } from 'react-native-elements';

class OtherDemo extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }
  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  }
  render() {
    const buttons = ['Hello', 'World', 'Buttons'];
    const { selectedIndex } = this.state;

    return (
      <View>
        <CheckBox
          title="Click Here"
          checked={true}
        />
        <CheckBox
          title="Click Here"
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={true}
        />
        <CheckBox
          center
          title="Click Here to Remove This Item"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          checked={this.state.checked}
        />
        <FormLabel>Name</FormLabel>
        <FormInput keyboardType="email-address" onChangeText={(text) => { console.log(text); }} />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
      </View>
    );
  }
}

export default OtherDemo;
