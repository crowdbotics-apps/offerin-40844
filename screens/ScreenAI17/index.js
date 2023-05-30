import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Picker } from 'react-native';

const AddPropertyScreen = () => {
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('https://tinyurl.com/42evm3m3');
  const [sellers, setSellers] = useState([{
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  }, {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '098-765-4321'
  }]);

  const handleStatusChange = value => {
    setStatus(value);
  };

  const handleImageChange = value => {
    setImage(value);
  };

  const handleAddSeller = () => {// Add seller logic here
  };

  const handleEditSeller = id => {// Edit seller logic here
  };

  const handleRemoveSeller = id => {// Remove seller logic here
  };

  return <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Status</Text>
        <Picker selectedValue={status} onValueChange={handleStatusChange} style={styles.input}>
          <Picker.Item label="For Sale" value="for_sale" />
          <Picker.Item label="For Rent" value="for_rent" />
        </Picker>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Property Image</Text>
        <TouchableOpacity onPress={() => console.log('Upload image')}>
          <Image source={{
          uri: image
        }} style={styles.image} />
        </TouchableOpacity>
        <TextInput placeholder="Image URL" style={styles.input} value={image} onChangeText={handleImageChange} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Add a Seller</Text>
        <TouchableOpacity onPress={handleAddSeller} style={styles.button}>
          <Text style={styles.buttonText}>Add Seller</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sellers}>
        <Text style={styles.label}>List of Sellers</Text>
        {sellers.map(seller => <View key={seller.id} style={styles.seller}>
            <Text style={styles.sellerName}>{seller.name}</Text>
            <Text style={styles.sellerEmail}>{seller.email}</Text>
            <Text style={styles.sellerPhone}>{seller.phone}</Text>
            <TouchableOpacity onPress={() => handleEditSeller(seller.id)} style={styles.editButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveSeller(seller.id)} style={styles.removeButton}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>)}
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  formGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sellers: {
    marginTop: 20
  },
  seller: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  sellerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  sellerEmail: {
    fontSize: 16,
    marginBottom: 5
  },
  sellerPhone: {
    fontSize: 16,
    marginBottom: 10
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 5,
    borderRadius: 5,
    marginRight: 10
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 5,
    borderRadius: 5
  }
});
export default AddPropertyScreen;