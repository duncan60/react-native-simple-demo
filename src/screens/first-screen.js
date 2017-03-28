import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ButtonDemo, OtherDemo } from 'widgets';

import { basic } from 'styles';

class FirstScreen extends PureComponent {
  onPushNavigator = () => {
    this.props.navigator.push({
      name: 'PushScreen',
    });
  }
  render() {
    return (
      <View style={basic.container}>
        <View style={basic.header}>
          <Text style={basic.headerTitle}> First Screen </Text>
        </View>
        <ScrollView style={basic.pageWarp}>
          <OtherDemo />
          <ButtonDemo pressHandler={this.onPushNavigator} />
        </ScrollView>
      </View>
    );
  }
}

FirstScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default FirstScreen;
