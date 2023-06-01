import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Sign up For Free</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="First & Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Create password" secureTextEntry={true} />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Pressable onPress={() => {
          navigation.navigate("termsAndConditions");
        }}><Text style={styles.checkboxText}>I have read Terms and Conditions and Privacy Policy</Text></Pressable>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up For Free</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10
  },
  checkboxText: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SignUpScreen;