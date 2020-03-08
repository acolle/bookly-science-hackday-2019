import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import WishListScreen from '../screens/WishListScreen';
import CameraScreen from '../screens/CameraScreen';
import TradingListScreen from '../screens/TradingListScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName="WishList">
      <BottomTab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          title: 'Wish List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} size={30} name="md-heart" />,
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: 'Scan',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} size={30} name="md-camera" />,
        }}
      />
      <BottomTab.Screen
        name="TradingList"
        component={TradingListScreen}
        options={{
          title: 'Trading List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} size={30} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'WishList';

  switch (routeName) {
    case 'WishList':
      return 'Books you want'
    case 'Camera':
      return 'Scan ISBN code';
    case 'TradingList':
      return 'Books you have';
  }
}
