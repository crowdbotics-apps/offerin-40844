import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleMessageChange = text => {
    setMessage(text);
  };

  const handleSubmit = () => {
    console.log(`Email: ${email}\nMessage: ${message}`);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput style={styles.input} placeholder="Email Address" onChangeText={handleEmailChange} value={email} />
      <TextInput style={styles.input} placeholder="Message" onChangeText={handleMessageChange} value={message} multiline={true} numberOfLines={4} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Go back')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default ScreenComponent;