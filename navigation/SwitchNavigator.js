import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Signup: {
      screen: SignupScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(SwitchNavigator)
