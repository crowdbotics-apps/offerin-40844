import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CommissionBuilderScreen = () => {
  const [commissionType, setCommissionType] = useState('');
  const [fee, setFee] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [result, setResult] = useState('');

  const calculateCommission = () => {
    let commission = 0;

    if (commissionType === 'Flat Fee') {
      commission = parseFloat(fee);
    } else if (commissionType === 'Flat Percentage') {
      commission = parseFloat(salesPrice) * (parseFloat(fee) / 100);
    } else if (commissionType === 'Graduated Percentage') {
      if (parseFloat(salesPrice) < 100000) {
        commission = parseFloat(salesPrice) * 0.05;
      } else if (parseFloat(salesPrice) >= 100000 && parseFloat(salesPrice) < 500000) {
        commission = parseFloat(salesPrice) * 0.075;
      } else if (parseFloat(salesPrice) >= 500000 && parseFloat(salesPrice) < 1000000) {
        commission = parseFloat(salesPrice) * 0.1;
      } else {
        commission = parseFloat(salesPrice) * 0.15;
      }
    }

    setResult(commission.toFixed(2));
  };

  return <View style={styles.container}>
      <Text style={styles.header}>Commission Builder</Text>
      <Text style={styles.label}>Select Commission Type</Text>
      <TextInput style={styles.input} placeholder="Choose commission type" value={commissionType} onChangeText={setCommissionType} />
      <Text style={styles.label}>Enter Fee ($x)</Text>
      <TextInput style={styles.input} placeholder="Enter fee" keyboardType="numeric" value={fee} onChangeText={setFee} />
      <TouchableOpacity style={styles.button} onPress={calculateCommission}>
        <Text style={styles.buttonText}>Save Commission</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Test your formula by entering different purchase prices below.</Text>
      <Text style={styles.label}>Sales Price</Text>
      <TextInput style={styles.input} placeholder="Enter sales price" keyboardType="numeric" value={salesPrice} onChangeText={setSalesPrice} />
      <Text style={styles.label}>Result</Text>
      <Text style={styles.result}>{result}</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  }
});
export default CommissionBuilderScreen;