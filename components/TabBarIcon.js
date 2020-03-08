import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {

  const styles = StyleSheet.create({
    headerIcon: {
      marginRight: 12
    },
    tabIcon: {
      marginBottom: -3
    }
  });

  console.log(props.name);

  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={(props.name === 'md.name') ? styles.headerIcon : styles.tabIcon }
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      onPress={props.handleAddBook}
    />
  );
}
