import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OfferScreen = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.offerId}>
        <Text style={styles.offerIdText}>Offer ID</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Buyer's agent</Text>
        <Text style={styles.info}>John Doe</Text>
        <Text style={styles.label}>Purchase price</Text>
        <Text style={styles.info}>$500,000</Text>
        <Text style={styles.label}>Closing date</Text>
        <Text style={styles.info}>10/31/2021</Text>
        <Text style={styles.label}>Inspections</Text>
        <Text style={styles.info}>Completed</Text>
        <Text style={styles.label}>Submitted</Text>
        <Text style={styles.info}>10/15/2021</Text>
      </View>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  offerId: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  offerIdText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  info: {
    fontSize: 16,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  }
});
export default OfferScreen;