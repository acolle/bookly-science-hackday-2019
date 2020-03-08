import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function HeaderIcon(props) {

  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={{ marginRight: 12 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      onPress={props.handleAddBook}
    />
  );
}
