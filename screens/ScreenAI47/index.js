import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pricing Plans</Text>
      </View>
      <View style={styles.planContainer}>
        <Text style={styles.planHeaderText}>Trial Plan - Limited Properties</Text>
        <View style={styles.planDetails}>
          <Text style={styles.planDetailText}>Add up to 3 properties</Text>
          <Text style={styles.planDetailText}>Everything in premium plan</Text>
          <Text style={styles.planDetailText}>Email and Phone support</Text>
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up For Free</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.planContainer}>
        <Text style={styles.planHeaderText}>Premium Plan - Unlimited Usage</Text>
        <View style={styles.planDetails}>
          <Text style={styles.planDetailText}>Unlimited Properties</Text>
          <Text style={styles.planDetailText}>Add Agents To Your Team</Text>
          <Text style={styles.planDetailText}>Custom Commission and Title Fee Templates</Text>
          <Text style={styles.planDetailText}>Texts and Email Alerts</Text>
          <Text style={styles.planDetailText}>Net Return Sheet</Text>
          <Text style={styles.planDetailText}>Auto Generated Offer Summary</Text>
        </View>
        <TouchableOpacity style={styles.testButton}>
          <Text style={styles.buttonText}>Test For Free</Text>
        </TouchableOpacity>
        <Text style={styles.priceText}>Price = $27/Month</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  backButton: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  planContainer: {
    marginBottom: 30
  },
  planHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  planDetails: {
    marginBottom: 20
  },
  planDetailText: {
    fontSize: 16,
    marginBottom: 10
  },
  signUpButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  testButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ScreenComponent;