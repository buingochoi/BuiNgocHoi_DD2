import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require("../../assets/cover.jpg")} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user" size={30} color="black" />
            <TextInput style={styles.input} placeholder=" Username or email" />
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="lock" size={30} color="black" />
            <TextInput style={styles.input} placeholder="*****" />
          </View>
          <Text style={{ alignSelf: 'flex-end' }}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end' }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Sign up</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'black',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    width: 300,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  background: {
    flex: 1,

    backgroundColor: '#836FFF',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  }
});

export default Login;
