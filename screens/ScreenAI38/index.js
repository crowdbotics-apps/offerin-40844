import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [team, setTeam] = useState('Team A');
  const [brokerage, setBrokerage] = useState('Brokerage X');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} editable={isEditing} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={isEditing} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} value={phone} onChangeText={setPhone} editable={isEditing} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Team name</Text>
          <TextInput style={styles.input} value={team} onChangeText={setTeam} editable={isEditing} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Real estate Brokerage Name</Text>
          <TextInput style={styles.input} value={brokerage} onChangeText={setBrokerage} editable={isEditing} />
        </View>
        {isEditing ? <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>}
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  },
  form: {
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  saveButton: {
    backgroundColor: '#4CD964',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ScreenComponent;