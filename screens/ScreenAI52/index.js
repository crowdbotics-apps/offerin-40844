import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = () => {// handle search logic here
  };

  const handleItemClick = item => {
    setSelectedItem(item); // handle item click logic here
  };

  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI53");
    }}><View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.backButton} />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Filter" value={searchQuery} onChangeText={text => setSearchQuery(text)} onSubmitEditing={handleSearch} />
      </View></Pressable>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Address:</Text>
        <Text style={styles.addressValue}>123 Main St, Anytown USA</Text>
      </View>
      <View style={styles.agentContainer}>
        <Text style={styles.agentName}>Agent Name:</Text>
        <Text style={styles.agentValue}>John Doe</Text>
      </View>
      <View style={styles.listingsContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI54");
      }}><Text style={styles.listingsTitle}>Agent & Account Listings:</Text></Pressable>
        <TouchableOpacity onPress={() => handleItemClick('item1')}>
          <Text style={styles.listingItem}>Listing Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemClick('item2')}>
          <Text style={styles.listingItem}>Listing Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemClick('item3')}>
          <Text style={styles.listingItem}>Listing Item 3</Text>
        </TouchableOpacity>
      </View>
      {selectedItem && <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.selectedItemContainer}>
          <Text style={styles.selectedItemText}>{selectedItem}</Text>
          <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.selectedItemImage} />
        </TouchableOpacity>}
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>More</Text>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI56");
    }}><Text style={styles.pzYkDiXZ}>{"Property Category"}</Text></Pressable></View>;
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
    marginBottom: 20
  },
  backButton: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20
  },
  addressContainer: {
    marginBottom: 20
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  addressValue: {
    fontSize: 16
  },
  agentContainer: {
    marginBottom: 20
  },
  agentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  agentValue: {
    fontSize: 16
  },
  listingsContainer: {
    marginBottom: 20
  },
  listingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  listingItem: {
    fontSize: 16,
    marginBottom: 5
  },
  selectedItemContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  selectedItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  selectedItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  moreButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  moreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  pzYkDiXZ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;