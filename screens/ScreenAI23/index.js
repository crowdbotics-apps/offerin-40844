import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NotesScreen = () => {
  const [note, setNote] = useState('');
  const [visibility, setVisibility] = useState('Only Me');

  const handleSaveNote = () => {// Save note logic here
  };

  const handleSendEmail = () => {// Send email logic here
  };

  return <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      <TextInput style={styles.input} placeholder="Add a Note" value={note} onChangeText={setNote} />
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Who can see this note:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setVisibility('Only Me')}>
          <Text style={styles.dropdownButtonText}>Only Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => setVisibility('Everyone')}>
          <Text style={styles.dropdownButtonText}>Everyone</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.emailLabel}>Email Address:</Text>
      <Text style={styles.email}>example@example.com</Text>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendEmailButton} onPress={handleSendEmail}>
        <Text style={styles.sendEmailButtonText}>Send Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  dropdownLabel: {
    marginRight: 10
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  },
  dropdownButtonText: {
    color: '#333'
  },
  emailLabel: {
    marginBottom: 5
  },
  email: {
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center'
  },
  sendEmailButton: {
    backgroundColor: '#34C759',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  sendEmailButtonText: {
    color: '#fff',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
export default NotesScreen;