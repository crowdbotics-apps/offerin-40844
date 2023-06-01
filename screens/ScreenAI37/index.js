import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI38");
      }}><Text style={styles.username}>John Doe</Text></Pressable>
        <Text style={styles.userType}>Premium User</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fees</Text>
          <Text style={styles.sectionText}>$50/month</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Commissions</Text>
          <Text style={styles.sectionText}>10%</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Users</Text>
          <Text style={styles.sectionText}>500</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subscription</Text>
          <Text style={styles.sectionText}>Active</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  userType: {
    fontSize: 16,
    color: '#666'
  },
  content: {
    padding: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  sectionText: {
    fontSize: 16,
    color: '#666'
  }
});
export default ProfileScreen;