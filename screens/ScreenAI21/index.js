import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PropertyOfferScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Property Offer ID</Text>
        <Text style={styles.headerText}>Submission date</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Activity Log</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.buttonText}>Notes</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI25");
      }}><Text style={styles.buttonText}>Edit Offer</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.actionMenu}>
        <Text style={styles.actionMenuText}>Action Menu</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Email User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request Highest &amp; best offer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Generate PDF Document</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Approve This Offer To Send To Seller(s)</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI22");
      }}><Text style={styles.sectionTitle}>{"Back To Property"}</Text></Pressable>
        <Text style={styles.sectionText}>Buyer’s real estate agent name</Text>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI20");
      }}><Text style={styles.sectionText}>{"Approval Required"}</Text></Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financial</Text>
        <Text style={styles.sectionText}>Purchase Price</Text>
        <Text style={styles.sectionText}>Escalation Clause</Text>
        <Text style={styles.sectionText}>Seller paid listing broker commission</Text>
        <Text style={styles.sectionText}>Seller paid closing cost on behalf of the buyer</Text>
        <Text style={styles.sectionText}>Seller paid Buying broker commission</Text>
        <Text style={styles.sectionText}>Seller paid Title and Escrow Fees</Text>
        <Text style={styles.sectionText}>Seller paid County Conveyance Fees</Text>
        <Text style={styles.sectionText}>Home warranty</Text>
        <Text style={styles.sectionText}>Estimated Net Return + $ (x)</Text>
        <Text style={styles.sectionText}>Earnest Money</Text>
        <Text style={styles.sectionText}>Financing Type</Text>
        <Text style={styles.sectionText}>Buyer appraisal gap coverage</Text>
        <Text style={styles.sectionText}>Property sale contingency</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dates</Text>
        <Text style={styles.sectionText}>Closing date</Text>
        <Text style={styles.sectionText}>Possession date</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inspections</Text>
        <Text style={styles.sectionText}>General</Text>
        <Text style={styles.sectionText}>Wood destroying insect</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit to DotLoop</Text>
      </TouchableOpacity>
      <Text style={styles.noteText}>Note to listing agent and seller</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highest &amp; best Offer</Text>
        <Text style={styles.sectionText}>Is this the highest &amp; best offer</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>No</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request highest &amp; best offer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.captchaContainer}>
        <Text style={styles.captchaText}>I'm not a robot</Text>
        <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
      </View>
      <Text style={styles.noteText}>Note from buyer’s agent</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back To Property</Text>
      </TouchableOpacity>
    <Text style={styles.fVuHifJS}>Lorem ipsum…</Text><Text style={styles.bdKSuibL}>Lorem ipsum…</Text><Text style={styles.lTtOOWxt}>Lorem ipsum…</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  actionMenu: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  actionMenuText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5
  },
  noteText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  toggleButton: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%'
  },
  toggleButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  captchaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  captchaText: {
    fontSize: 16,
    marginRight: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5
  },
  fVuHifJS: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  bdKSuibL: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  lTtOOWxt: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default PropertyOfferScreen;