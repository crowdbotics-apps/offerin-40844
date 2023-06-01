import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Custom Title Fee Templates</Text>
      <Text style={styles.subHeaderText}>Account Admins can create custom title fees to calculate the sellers costs in offers.</Text>
      <Text style={styles.subHeaderText}>Changes you make here WILL impact title fees on existing properties or existing offers for all users on the account.</Text>
      <TouchableOpacity style={styles.addButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI40");
      }}><Text style={styles.addButtonText}>Add Title Fee Structure</Text></Pressable>
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
  subHeaderText: {
    fontSize: 16,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;