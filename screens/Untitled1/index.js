import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI3");
      }}><Text style={styles.EzkLTXZp}>{"Select User Type"}</Text></Pressable><Text style={styles.xavCelRr}>{"Login"}</Text><Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.cahvTMHI}>{"Sign Up For Free"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.tgkpTkyq}>{"About us"}</Text></Pressable><Text style={styles.GjLdfHxW}>{"FAQ"}</Text><Text style={styles.RMbOdBoo}>{" Search Bar "}</Text><Text style={styles.lFlMFWXh}>{"Contact us"}</Text><Text style={styles.TKvXLbSW}>{"Dashboard"}</Text><Pressable onPress={() => {
        navigation.navigate("ScreenAI2");
      }}><Text style={styles.NPaVITVD}>{"Support/Send Feedback"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  EzkLTXZp: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  xavCelRr: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cahvTMHI: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  tgkpTkyq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  GjLdfHxW: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  RMbOdBoo: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  lFlMFWXh: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  TKvXLbSW: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NPaVITVD: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;