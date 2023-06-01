import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, CheckBox } from 'react-native';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignIn = () => {// handle sign in logic here
  };

  return <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.logoText}>Sign In</Text>
      </View>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <View style={styles.checkboxContainer}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.checkboxText}>I'm not a robot</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View></Pressable>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Sign in via Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Sign in via Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkboxText: {
    marginLeft: 10
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#999'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  signInButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  facebookButton: {
    backgroundColor: '#3B5998',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SignInScreen;