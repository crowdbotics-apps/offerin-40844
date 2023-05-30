import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Update Payment Information</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Address Line 1" />
        <TextInput style={styles.input} placeholder="Address Line 2" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="State" />
        <TextInput style={styles.input} placeholder="Zip" />
        <TextInput style={styles.input} placeholder="Country" />
        <TextInput style={styles.input} placeholder="Card Number" />
        <TextInput style={styles.input} placeholder="Card Expiration date" />
        <TextInput style={styles.input} placeholder="CVV" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  form: {
    marginBottom: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  }
});
export default ScreenComponent;