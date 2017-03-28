import React, { PureComponent } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  onItemPressHandler = () => {
    this.props.itemPress();
  }
  onRefresh = () => {
    console.log('RefreshControl onRefresh');
    this.setState({ refreshing: true });
    this.timer = setTimeout(
      () => {
        this.setState({ refreshing: false });
      },
      500,
    );
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            title="Loading..."
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
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
