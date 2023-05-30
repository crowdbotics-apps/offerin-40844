import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Starter Plan</Text>
        <Text style={styles.planPrice}>$0 Per Month / Per User</Text>
        <Text style={styles.planFeatures}>Every Feature we have</Text>
        <Text style={styles.planFeatures}>Unlimited Users</Text>
        <Text style={styles.planFeatures}>Up to 7 Properties</Text>
        <TouchableOpacity style={styles.currentPlanButton}>
          <Text style={styles.currentPlanButtonText}>Current Plan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Standard Plan</Text>
        <Text style={styles.planPrice}>$27 Per Month / Per User</Text>
        <Text style={styles.planFeatures}>Online Offer Submission</Text>
        <Text style={styles.planFeatures}>Team Account</Text>
        <Text style={styles.planFeatures}>Unlimited Properties</Text>
        <Text style={styles.planFeatures}>Email Notification</Text>
        <Text style={styles.planFeatures}>Custom Commissions</Text>
        <Text style={styles.planFeatures}>Custom Title Fees</Text>
        <Text style={styles.planFeatures}>Seller Portal</Text>
        <Text style={styles.planFeatures}>Downgrade Anytime</Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Ninja Plan</Text>
        <Text style={styles.planPrice}>$37 Per Month / Per User</Text>
        <Text style={styles.planFeatures}>Everything in Standard +</Text>
        <Text style={styles.planFeatures}>DotLoop Integration</Text>
        <Text style={styles.planFeatures}>Send data to your apps</Text>
        <Text style={styles.planFeatures}>MLS property Sync</Text>
        <Text style={styles.planFeatures}>Offer Communication</Text>
        <Text style={styles.planFeatures}>Downgrade Anytime</Text>
        <TouchableOpacity style={styles.comingSoonButton}>
          <Text style={styles.comingSoonButtonText}>Coming Soon</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.closeIcon} />
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
  planContainer: {
    marginBottom: 30
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  planFeatures: {
    fontSize: 16,
    marginBottom: 5
  },
  currentPlanButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  currentPlanButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  subscribeButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 20
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  comingSoonButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 20
  },
  comingSoonButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20
  },
  closeIcon: {
    width: 30,
    height: 30
  }
});
export default ScreenComponent;