import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
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
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
];

class ListDemo extends PureComponent {
  onItemPressHandler = () => {
    this.props.itemPress();
  }
  render() {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  }
}

ListDemo.propTypes = {
  itemPress: React.PropTypes.func.isRequired,
};

export default ListDemo;
