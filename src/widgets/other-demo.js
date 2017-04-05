import React, { PureComponent } from 'react';
import { View, Switch } from 'react-native';
import { CheckBox, FormLabel, FormInput } from 'react-native-elements';

let storageCache;
const saveStorage = (obj) => {
  storageCache = {
    ...storageCache,
    ...obj,
  };
  storage.save({
    key: 'storageTest',
    rawData: {
      ...storageCache,
    },
  });
};

class OtherDemo extends PureComponent {
  constructor() {
    super();
    this.state = {
      isSwitch: false,
      isChecked: false,
    };
  }
  componentDidMount() {
    storage.load({
      key: 'storageTest',
    }).then((ret) => {
      this.setState({
        isSwitch: ret.isSwitch,
        isChecked: ret.isChecked,
      });
      storageCache = ret;
    });
  }
  onSwitchValueChange = (value) => {
    this.setState({ isSwitch: value });
    saveStorage({ isSwitch: value });
  }
  onCheckBoxPress = () => {
    const bol = this.state.isChecked;
    this.setState({ isChecked: !bol });
    saveStorage({ isChecked: !bol });
  }
  render() {
    const {
      isSwitch,
      isChecked,
    } = this.state;

    return (
      <View style={{ marginBottom: 20 }}>
        <CheckBox
          name="check-box"
          title="Click Here"
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={isChecked}
          onPress={this.onCheckBoxPress}
        />
        <Switch
          onValueChange={this.onSwitchValueChange}
          value={isSwitch}
        />
        <FormLabel>Form Label</FormLabel>
        <FormInput
          keyboardType="email-address"
          placeholder="input text"
          onChangeText={(text) => { console.log(text); }}
        />
      </View>
    );
  }
}

export default OtherDemo;
