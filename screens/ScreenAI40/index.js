import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddTitleFeeScreen = () => {
  const [name, setName] = useState('');
  const [formula, setFormula] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [result, setResult] = useState('');

  const handleAddTitleFee = () => {
    // Add logic to calculate title fee based on formula and purchase price
    setResult('Title fee result');
  };

  const handleSaveTitleFeeTemplate = () => {// Add logic to save title fee template
  };

  return <View style={styles.container}>
      <Text style={styles.header}>Add Title Fee Template</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Formula</Text>
        <TextInput style={styles.input} value={formula} onChangeText={setFormula} placeholder="Enter formula" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddTitleFee}>
        <Text style={styles.buttonText}>Add Title Fee</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Purchase Price</Text>
        <TextInput style={styles.input} value={purchasePrice} onChangeText={setPurchasePrice} placeholder="Enter purchase price" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Result</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSaveTitleFeeTemplate}>
        <Text style={styles.buttonText}>Save New Title Fee Template</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  result: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f2f2f2'
  }
});
export default AddTitleFeeScreen;