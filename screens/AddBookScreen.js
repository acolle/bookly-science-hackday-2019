import React, { useContext, useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';

const AddBook = (props) => {

  console.log("Here");

  // const { dispatch } = useContext(AuthContext);
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword ] = useState('');
  //
  // const handleLogin = async () => {
  //
  // }

  const handleChangeScreen = () => {
    // props.navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleChangeScreen}>
        <Text style={styles.buttonText}>Scan book</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity style={styles.button} onPress={handleChangeScreen}>
        <Text style={styles.buttonText}>Search book</Text>
      </TouchableOpacity>
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

export default AddBook
