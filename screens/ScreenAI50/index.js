import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

const NotificationSettingsScreen = () => {
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [notificationFrequency, setNotificationFrequency] = useState('daily');

  const handleInAppNotificationsToggle = () => {
    setInAppNotifications(!inAppNotifications);
  };

  const handleEmailNotificationsToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleNotificationFrequencyChange = frequency => {
    setNotificationFrequency(frequency);
  };

  return <View style={_styles.lRYkFwOo}>
      <View style={_styles.RjNcstzd}>
        <Switch value={inAppNotifications} onValueChange={handleInAppNotificationsToggle} />
        <Text style={_styles.jNFhaSyf}>In-app Notifications</Text>
      </View>
      <View style={_styles.HuvqfIro}>
        <Switch value={emailNotifications} onValueChange={handleEmailNotificationsToggle} />
        <Text style={_styles.kEVWZiUM}>Email Notifications</Text>
      </View>
      <View style={_styles.CRYYqELM}>
        <Text style={_styles.NGdIgOKe}>Set Notifications frequency:</Text>
        <TouchableOpacity style={{
        backgroundColor: notificationFrequency === 'daily' ? '#ccc' : '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
      }} onPress={() => handleNotificationFrequencyChange('daily')}>
          <Text>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
        backgroundColor: notificationFrequency === 'weekly' ? '#ccc' : '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
      }} onPress={() => handleNotificationFrequencyChange('weekly')}>
          <Text>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
        backgroundColor: notificationFrequency === 'monthly' ? '#ccc' : '#fff',
        padding: 10,
        borderRadius: 5
      }} onPress={() => handleNotificationFrequencyChange('monthly')}>
          <Text>Monthly</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={_styles.BizSzAIE} onPress={() => console.log('Go back')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>;
};

export default NotificationSettingsScreen;

const _styles = StyleSheet.create({
  lRYkFwOo: {
    flex: 1,
    padding: 20
  },
  RjNcstzd: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  jNFhaSyf: {
    marginLeft: 10
  },
  HuvqfIro: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  kEVWZiUM: {
    marginLeft: 10
  },
  CRYYqELM: {
    marginBottom: 20
  },
  NGdIgOKe: {
    marginBottom: 10
  },
  BizSzAIE: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5
  }
});