import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CommissionScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Custom Commission Structure</Text>
      <Text style={styles.descriptionText}>
        Account Admins can create custom commission structures on your account for frequently used commissions. Custom commission structures can be selected for the buyer's broker or listing broker commission on a property or an offer.
      </Text>
      <Text style={styles.noteText}>
        Changes made here do NOT impact commissions on existing properties or offers. To change the commission structure on existing properties or offers, make the changes directly on those elements.
      </Text>
      <TouchableOpacity style={styles.addButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI42");
      }}><Text style={styles.addButtonText}>Add Commission Structure</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 30,
    height: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20
  },
  noteText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CommissionScreen;