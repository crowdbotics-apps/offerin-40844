import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.topRight}>
        <Text style={styles.welcomeText}>Welcome, John Doe</Text>
        <Text style={styles.profileText}>Profile - Real Estate Agent, New York</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.notificationIcon} />
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topLeft}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <TouchableOpacity style={styles.propertiesButton}>
          <Text style={styles.propertiesButtonText}>Properties</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerPage}>
        <Text style={styles.centerPageTitle}>Properties</Text>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Search" />
        </View>
        <Text style={styles.addressText}>123 Main St, New York, NY 10001</Text>
        <Text style={styles.agentNameText}>Agent: John Doe</Text>
        <View style={styles.listingsContainer}>
          <Text style={styles.listingText}>Listing 1</Text>
          <Text style={styles.listingText}>Listing 2</Text>
          <Text style={styles.listingText}>Listing 3</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add A Property</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit An Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Request Highest & Best Offer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavigation}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.homeIcon} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.settingsIcon} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.paymentIcon} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  profileText: {
    fontSize: 14,
    marginRight: 10
  },
  notificationIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 14
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  propertiesButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginRight: 10
  },
  propertiesButtonText: {
    color: '#fff',
    fontSize: 14
  },
  settingsButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 14
  },
  centerPage: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  centerPageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  searchBarContainer: {
    width: '100%',
    marginBottom: 20
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: '100%'
  },
  addressText: {
    fontSize: 16,
    marginBottom: 10
  },
  agentNameText: {
    fontSize: 14,
    marginBottom: 20
  },
  listingsContainer: {
    width: '100%',
    marginBottom: 20
  },
  listingText: {
    fontSize: 14,
    marginBottom: 10
  },
  addButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14
  },
  requestButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 14
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  homeIcon: {
    width: 20,
    height: 20
  },
  settingsIcon: {
    width: 20,
    height: 20
  },
  paymentIcon: {
    width: 20,
    height: 20
  }
});
export default ScreenComponent;