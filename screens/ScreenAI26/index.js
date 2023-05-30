import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const ShareOfferScreen = () => {
  return <View style={_styles.HKWhFawA}>
      <Text style={_styles.eSDsphBt}>
        Share Offer
      </Text>
      <Text style={_styles.IgxaMUQS}>
        Select the seller(s) below to email and share the offer. They will receive
        a summary email with an automatic login link to the offer page. If the
        seller does not receive the email, they may need to check their spam. To
        send to other sellers, you need to add them to the property.
      </Text>
      <TouchableOpacity style={_styles.ixDRPgQl}>
        <View style={_styles.NWdZnKkn}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.VkaTjpmr} />
          <Text style={_styles.wFmwKEAd}>Select Seller</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.GmtdHcib}>
        <Text style={_styles.HHDYoQNv}>
          Share Offer
        </Text>
      </TouchableOpacity>
    </View>;
};

export default ShareOfferScreen;

const _styles = StyleSheet.create({
  HKWhFawA: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  eSDsphBt: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40
  },
  IgxaMUQS: {
    fontSize: 16,
    marginTop: 20
  },
  ixDRPgQl: {
    marginTop: 20
  },
  NWdZnKkn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  VkaTjpmr: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  wFmwKEAd: {
    marginLeft: 10,
    fontSize: 16
  },
  GmtdHcib: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40
  },
  HHDYoQNv: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  }
});