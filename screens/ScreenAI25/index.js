import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const EditOfferScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.header}>Edit Offer (Pre-Filled Header Text)</Text>
      <Text style={styles.subHeader}>You must click the save offer on the last page to make changes. Editing the offer does not send any notifications or execute workflows. Typically you edit an offer if someone makes an entry error or an item needs to be corrected (Pre-Filled)</Text>
      <Text style={styles.label}>Buyers (Pre-Filled Text)</Text>
      <TextInput style={styles.input} placeholder="Enter Buyer’s name(s)" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Buyer</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Title Company (Pre-Filled Text)</Text>
      <TextInput style={styles.input} placeholder="Title and Escrow Company" />
      <Text style={styles.label}>Buyer’s real estate agent(Pre-Filled Text)</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Brokerage" />
      <TextInput style={styles.input} placeholder="Phone" />
      <TextInput style={styles.input} placeholder="Email" />
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-start'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20
  }
});
export default EditOfferScreen;