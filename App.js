import React from 'react';
import { AuthProvider } from './components/AuthProvider';
import SwitchNavigator from './navigation/SwitchNavigator'

export default App = () => {
  return (
    <AuthProvider>
      <SwitchNavigator />
    </AuthProvider>
  )
}
