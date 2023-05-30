import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const ListingAgentScreen = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [textNotification, setTextNotification] = useState(false);
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Add a Listing Agent</Text>
      <Text style={styles.description}>
        Add a listing agent to the property to have full access.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Listing Agent</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select Listing Agent</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Notify By Email For New Offer</Text>
        <Switch value={emailNotification} onValueChange={setEmailNotification} />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Notify By Text For New Offer</Text>
        <Switch value={textNotification} onValueChange={setTextNotification} />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add a Listing Agent</Text>
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
    paddingTop: 50
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#C7C7CC',
    borderRadius: 5,
    padding: 10
  },
  dropdownText: {
    fontSize: 16,
    color: '#C7C7CC'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  closeButton: {
    backgroundColor: '#C7C7CC',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center'
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default ListingAgentScreen;