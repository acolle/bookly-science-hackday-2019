import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HeaderIcon from '../components/HeaderIcon';
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddBook}>
          <HeaderIcon
            name="md-add"
            focused={true}
            size={30}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleAddBook = () => {
    let routeName = route.state?.routes[route.state.index]?.name
    alert(routeName);
    // navigation.navigate('AddBook');
  }

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
