import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const listData = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

class ListDemo extends Component {
  onItemPressHandler = () => {
    this.props.itemPress();
  }
  render() {
    return (
      <View>
        <List>
          {
            listData.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                badge={{ value: 3, badgeTextStyle: { color: 'orange' } }}
                onPress={this.onItemPressHandler}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

ListDemo.propTypes = {
  itemPress: React.PropTypes.func.isRequired,
};

export default ListDemo;
