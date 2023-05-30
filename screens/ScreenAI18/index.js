import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet, TextInput } from "react-native";

const ListingAgentScreen = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [textNotification, setTextNotification] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');

  const handleAddSeller = () => {// Add seller logic here
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{"Add a Seller"}</Text>
      <Text style={styles.description}>
        Enter the information below to add a seller to the property. The seller will not receive any invitation or notification until they receive an offer.
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter name" />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email" />
      <Text style={styles.label}>Mobile Phone</Text>
      <TextInput style={styles.input} value={mobilePhone} onChangeText={setMobilePhone} placeholder="Enter mobile phone" />
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
      <TouchableOpacity style={styles.addButton} onPress={handleAddSeller}>
        <Text style={styles.addButtonText}>Add a Seller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20
  },
  backButtonText: {
    fontSize: 16,
    color: "#007AFF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  notificationLabel: {
    flex: 1,
    fontSize: 16
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  closeButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center"
  },
  closeButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default ListingAgentScreen;