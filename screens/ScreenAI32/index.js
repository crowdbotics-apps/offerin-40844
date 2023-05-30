import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ConfirmationScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Congratulations!</Text>
        <Text style={styles.headerText}>Your offer was submitted.</Text>
      </View>
      <View style={styles.body}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.addressText}>123 Main St</Text>
        <Text style={styles.submittedText}>Submitted at 12:34 PM</Text>
        <Text style={styles.agentText}>Buyer's Agent: John Doe</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  body: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  addressText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  submittedText: {
    fontSize: 16,
    marginBottom: 10
  },
  agentText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ConfirmationScreen;