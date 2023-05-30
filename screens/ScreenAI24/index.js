import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

const HighestBestOfferScreen = () => {
  const [selectedOffer, setSelectedOffer] = useState('');
  const [isMultipleSelected, setIsMultipleSelected] = useState(false);
  return <View style={_styles.GnrvDVdy}>
      <View style={_styles.BNMFsSlq}>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.tvBgdKMt} />
        </TouchableOpacity>
        <Text style={_styles.VSjOjCDQ}>Highest & Best Offer</Text>
      </View>

      <View style={_styles.ZCrZySaT}>
        <Text style={_styles.ZcEFyUQF}>List of all Offers</Text>
        <View style={_styles.OffmSOnl}>
          <TouchableOpacity style={_styles.IeHANkOG}>
            <Text style={_styles.hzkvdQeu}>{selectedOffer || 'Select Specific Offer'}</Text>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.VMhgbMTP} />
          </TouchableOpacity>
          <View style={_styles.dLXleUuA}>
            <TouchableOpacity style={_styles.MxiPydVt}>
              <Text style={_styles.RIdCxIAG}>Offer 1</Text>
              {isMultipleSelected && <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={_styles.OWHfASpr} />}
            </TouchableOpacity>
            <TouchableOpacity style={_styles.yeEEBkXJ}>
              <Text style={_styles.FUbgQVBi}>Offer 2</Text>
              {isMultipleSelected && <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={_styles.XTRTHnul} />}
            </TouchableOpacity>
            <TouchableOpacity style={_styles.DenKdXmq}>
              <Text style={_styles.ulUxqbLE}>Offer 3</Text>
              {isMultipleSelected && <Image source={{
              uri: 'https://tinyurl.com/42evm3m3'
            }} style={_styles.YIrPnrNz} />}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={_styles.CUUAhgBV}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.GbnduoUK} />
          <Text style={_styles.QCYnwTkc}>Select multiple offers</Text>
          <View style={_styles.xDprgOcN} />
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.zPiavRmm} />
        </TouchableOpacity>
      </View>

      <View style={_styles.vUngKRHG}>
        <Text style={_styles.vnIRKenx}>Buyer’s real estate agent</Text>
        <TextInput style={_styles.uEOMMgRB} placeholder="Name" />
        <TextInput style={_styles.kXgIjAHX} placeholder="Brokerage" />
        <TextInput style={_styles.ExQImCml} placeholder="Phone Number" />
        <TextInput style={_styles.IKZqYUho} placeholder="Email" />
      </View>

      <TouchableOpacity style={_styles.zSOtQFKY}>
        <Text style={_styles.ihdmlvoa}>Request Highest & best Offer</Text>
      </TouchableOpacity>
    </View>;
};

export default HighestBestOfferScreen;

const _styles = StyleSheet.create({
  GnrvDVdy: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  BNMFsSlq: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40
  },
  tvBgdKMt: {
    width: 20,
    height: 20
  },
  VSjOjCDQ: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20
  },
  ZCrZySaT: {
    marginTop: 40
  },
  ZcEFyUQF: {
    fontSize: 16,
    fontWeight: "bold"
  },
  OffmSOnl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10
  },
  IeHANkOG: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  hzkvdQeu: {
    fontSize: 16
  },
  VMhgbMTP: {
    width: 20,
    height: 20
  },
  dLXleUuA: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 10
  },
  MxiPydVt: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  RIdCxIAG: {
    fontSize: 16
  },
  OWHfASpr: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  yeEEBkXJ: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  FUbgQVBi: {
    fontSize: 16
  },
  XTRTHnul: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  DenKdXmq: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  ulUxqbLE: {
    fontSize: 16
  },
  YIrPnrNz: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  CUUAhgBV: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  GbnduoUK: {
    width: 20,
    height: 20
  },
  QCYnwTkc: {
    fontSize: 16,
    marginLeft: 10
  },
  xDprgOcN: {
    flex: 1
  },
  zPiavRmm: {
    width: 20,
    height: 20
  },
  vUngKRHG: {
    marginTop: 40
  },
  vnIRKenx: {
    fontSize: 16,
    fontWeight: "bold"
  },
  uEOMMgRB: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10
  },
  kXgIjAHX: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10
  },
  ExQImCml: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10
  },
  IKZqYUho: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10
  },
  zSOtQFKY: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 40
  },
  ihdmlvoa: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  }
});