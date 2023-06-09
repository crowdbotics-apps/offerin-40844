import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  return <View style={_styles.sQbdgGOf}>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI35");
      }}><Text style={styles.buttonText}>{"Log Out"}</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI37");
      }}><Text style={styles.buttonText}>{"Account Settings 2"}</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI50");
      }}><Text style={styles.toggleText}>Notifications</Text></Pressable>
        <Switch value={notifications} onValueChange={value => setNotifications(value)} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Email notifications</Text>
        <Switch value={emailNotifications} onValueChange={value => setEmailNotifications(value)} />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>SMS notifications</Text>
        <Switch value={smsNotifications} onValueChange={value => setSmsNotifications(value)} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI34");
      }}><Text style={styles.buttonText}>Change password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact-us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Frequently Asked Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Support/ Send Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>;
};

const styles = {
  button: {
    backgroundColor: '#FCA311',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  toggleText: {
    fontSize: 16
  }
};
export default ProfileScreen;

const _styles = StyleSheet.create({
  sQbdgGOf: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  }
});