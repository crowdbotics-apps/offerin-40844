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
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Listing Agent</Text>
        <Text style={styles.dropdownValue}>John Doe</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationLabel}>
          Notify By Email For New Offer
        </Text>
        <Switch value={emailNotification} onValueChange={setEmailNotification} />
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationLabel}>
          Notify By Text For New Offer
        </Text>
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
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  dropdownLabel: {
    flex: 1,
    fontSize: 16
  },
  dropdownValue: {
    fontSize: 16,
    color: '#007AFF'
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  notificationLabel: {
    flex: 1,
    fontSize: 16
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingVertical: 15,
    alignItems: 'center'
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ListingAgentScreen;