import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

const BackButton = () => {
  return <TouchableOpacity style={styles.backButton}>
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.backIcon} />
    </TouchableOpacity>;
};

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <BackButton />
      <Text style={styles.header}>Your Subscription</Text>
      <Text style={styles.subscriptionText}>
        You are currently subscribed to the (X Plan).
      </Text>
      <Text style={styles.subscriptionStatus}>
        The status of your account is (Active/Inactive)
      </Text>
      <Text style={styles.subscriptionDetails}>
        Your account is currently using 0 of 3 properties and 1 user(s) at
        $0/month
      </Text>
      <Text style={styles.paymentHeader}>Payment Details</Text>
      <TouchableOpacity style={styles.paymentText}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI47");
      }}><Text style={styles.paymentText}>Add Payment Method</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Card Type</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Number</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Expiration</Text>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.invoiceHeader}>Invoice History</Text>
      <View style={styles.invoiceContainer}>
        <Text style={styles.invoiceDate}>Date</Text>
        <Text style={styles.invoiceStatus}>Status</Text>
        <Text style={styles.invoiceAmount}>Amount</Text>
      </View>
      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeText}>Upgrade Subscription</Text>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI49");
    }}><Text style={styles.fqIALGKN}>{"Upgrade Subscription"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 20,
    height: 20
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  subscriptionText: {
    fontSize: 18,
    marginTop: 20
  },
  subscriptionStatus: {
    fontSize: 18,
    marginTop: 10
  },
  subscriptionDetails: {
    fontSize: 18,
    marginTop: 10
  },
  paymentHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  paymentText: {
    fontSize: 18,
    marginTop: 20,
    color: "#007AFF"
  },
  inputContainer: {
    marginTop: 10
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10
  },
  invoiceHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  invoiceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  invoiceDate: {
    fontSize: 18,
    fontWeight: "bold"
  },
  invoiceStatus: {
    fontSize: 18,
    fontWeight: "bold"
  },
  invoiceAmount: {
    fontSize: 18,
    fontWeight: "bold"
  },
  upgradeButton: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20
  },
  upgradeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  fqIALGKN: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;