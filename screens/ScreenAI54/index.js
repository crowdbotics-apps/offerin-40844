import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AgentAccountListingsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Agent & Account Listings</Text>
        <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Real estate agent name" />
      </View>
      <View style={styles.listingsContainer}>
        <TouchableOpacity style={styles.listing}>
          <Image style={styles.listingImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.listingDetails}>
            <Text style={styles.listingTitle}>Property Listing 1</Text>
            <Text style={styles.listingAddress}>123 Main St, Anytown USA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listing}>
          <Image style={styles.listingImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.listingDetails}>
            <Text style={styles.listingTitle}>Property Listing 2</Text>
            <Text style={styles.listingAddress}>456 Oak St, Anytown USA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listing}>
          <Image style={styles.listingImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.listingDetails}>
            <Text style={styles.listingTitle}>Property Listing 3</Text>
            <Text style={styles.listingAddress}>789 Elm St, Anytown USA</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreButtonText}>View More</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  backButton: {
    fontSize: 18,
    color: '#007AFF'
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18
  },
  listingsContainer: {
    flex: 1,
    marginBottom: 20
  },
  listing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  listingImage: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  listingDetails: {
    flex: 1
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  listingAddress: {
    fontSize: 16,
    color: '#666'
  },
  viewMoreButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  viewMoreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default AgentAccountListingsScreen;