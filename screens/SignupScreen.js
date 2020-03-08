import React, { useContext, useState } from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { signup } from '../actions/auth';
import AuthContext from '../context/AuthContext';

const SignupScreen = (props) => {

  const { dispatch } = useContext(AuthContext);
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignUp = async () => {
    const result = await signup(username, email, password);
    if (result) {
      dispatch(result);
      props.navigation.navigate('Home');
    } else {
      // TODO: Error message
    }
  }

  const handleChangeScreen = () => {
    props.navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../assets/images/robot-prod.png')}
          style={styles.welcomeImage}
        />
        <Text style={styles.titleText}>Bookly</Text>
      </View>
      <TextInput
        style={styles.inputBox}
        name="username"
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder='Choose a username..'
        />
      <TextInput
        style={styles.inputBox}
        name="email"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder='Enter your email..'
        autoCapitalize='none'
        />
      <TextInput
        style={styles.inputBox}
        name="password"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder='Choose a password..'
        secureTextEntry={true}
        />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Button
        title="Already have an account? Login"
        onPress={handleChangeScreen}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    padding: 10
  },
  titleText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#555'
  },
  titleImage: {
    width: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  inputBox: {
    width: '85%',
    margin: 6,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#5370d2',
    borderRadius: 5,
    width: 160
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default SignupScreen
