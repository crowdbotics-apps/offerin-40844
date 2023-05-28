import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [isListingAgent, setIsListingAgent] = useState(false);
  const [isBuyerAgent, setIsBuyerAgent] = useState(false);

  const handleListingAgentToggle = () => {
    setIsListingAgent(!isListingAgent);
    setIsBuyerAgent(false);
  };

  const handleBuyerAgentToggle = () => {
    setIsBuyerAgent(!isBuyerAgent);
    setIsListingAgent(false);
  };

  return <View style={styles.container}>
      <Text style={styles.header}>User Type</Text>
      <TouchableOpacity style={[styles.toggleButton, isListingAgent && styles.activeToggleButton]} onPress={handleListingAgentToggle}>
        <Text style={[styles.toggleButtonText, isListingAgent && styles.activeToggleButtonText]}>
          Listing real estate agent
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.toggleButton, isBuyerAgent && styles.activeToggleButton]} onPress={handleBuyerAgentToggle}>
        <Text style={[styles.toggleButtonText, isBuyerAgent && styles.activeToggleButtonText]}>
          Buyer’s real estate agent
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  toggleButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  activeToggleButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  toggleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  activeToggleButtonText: {
    color: '#fff'
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default ScreenComponent;