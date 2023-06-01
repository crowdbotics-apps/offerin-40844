import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const [earnestMoney, setEarnestMoney] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [possessionDate, setPossessionDate] = useState('');
  return <ScrollView style={_styles.WmndUBDO}>
      <View style={_styles.QehqASRo}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={_styles.AwxCOTsP}>Back</Text>
        </TouchableOpacity>
        <Text style={_styles.OcgbEaKd}>Review</Text>
        <Text style={_styles.qiaOylVn}>Your Offer has not been submitted yet. You must click the submit offer button at the bottom to submit your offer.</Text>
        <Text style={_styles.mvSuPnci}>People</Text>
        <Text style={_styles.XbKVkybP}>Buyer’s real estate agent name</Text>
        <TextInput style={_styles.BowZszOn} placeholder="Enter name" value="John Doe" />
        <Text style={_styles.CXyNpvlF}>Buyer’s name</Text>
        <TextInput style={_styles.gBAdwkTe} placeholder="Enter name" value="Jane Doe" />
        <Text style={_styles.uCYmwytU}>Financial</Text>
        <Text style={_styles.pwqfUZGG}>Purchase Price</Text>
        <TextInput style={_styles.NXxZbnNT} placeholder="Enter price" value={price} onChangeText={setPrice} />
        <Text style={_styles.brfAjUgJ}>Escalation Clause</Text>
        <TextInput style={_styles.vvmRtfGR} placeholder="Enter clause" value="N/A" />
        <Text style={_styles.hThKJjoj}>Seller paid buyer broker commission</Text>
        <TextInput style={_styles.MAcdKDvg} placeholder="Enter commission" value="N/A" />
        <Text style={_styles.dIqrhOfS}>Seller paid closing cost on behalf of the buyer</Text>
        <TextInput style={_styles.UNlCzxmZ} placeholder="Enter cost" value="N/A" />
        <Text style={_styles.YTDTYvxc}>Home warranty</Text>
        <TextInput style={_styles.URDfPsYx} placeholder="Enter warranty" value="N/A" />
        <Text style={_styles.ulyJaPwI}>Earnest Money</Text>
        <TextInput style={_styles.AYtibTtg} placeholder="Enter money" value={earnestMoney} onChangeText={setEarnestMoney} />
        <Text style={_styles.alKXbFmp}>Financing Type</Text>
        <TextInput style={_styles.GBjmsuur} placeholder="Enter type" value="N/A" />
        <Text style={_styles.HemUyOQU}>Buyer appraisal gap coverage</Text>
        <TextInput style={_styles.Qbpsxfxy} placeholder="Enter coverage" value="N/A" />
        <Text style={_styles.uxVJbmYN}>Property sale contingency</Text>
        <TextInput style={_styles.jFSGHWAn} placeholder="Enter contingency" value="N/A" />
        <Text style={_styles.rUhkvxnj}>Dates</Text>
        <Text style={_styles.grOhSWeS}>Closing date</Text>
        <TextInput style={_styles.dxfgywhm} placeholder="Enter date" value={closingDate} onChangeText={setClosingDate} />
        <Text style={_styles.XFPgEdlG}>Possession date</Text>
        <TextInput style={_styles.RDHSLNPM} placeholder="Enter date" value={possessionDate} onChangeText={setPossessionDate} />
        <Text style={_styles.QNwlNhnl}>Inspections</Text>
        <Text style={_styles.QFslcHUA}>General</Text>
        <TextInput style={_styles.QAbbjgrU} placeholder="Enter inspection" value="N/A" />
        <Text style={_styles.IkxtMFJq}>Wood destroying insect</Text>
        <TextInput style={_styles.EPZsPGuf} placeholder="Enter insect" value="N/A" />
        <Text style={_styles.HlRJVzSq}>Documents</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.zcJRidkj} />
        <Text style={_styles.PDgFQSTG}>Note to listing agent and seller</Text>
        <TextInput style={_styles.rOHNNWjP} placeholder="Enter note" value="N/A" />
        <View style={_styles.lMSttkRq}>
          <TouchableOpacity style={_styles.HDkABThS} onPress={() => console.log('Checkbox pressed')}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.bfVYoptz} />
          </TouchableOpacity>
          <Text>I'm not a robot</Text>
        </View>
        <TouchableOpacity style={_styles.OWXRgxCD}>
          <Text style={_styles.pAyeyTMh}>Submit Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Edit Offer button pressed')}>
          <Text style={_styles.McJEZKpY}>Edit Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Previous button pressed')}>
          <Text style={_styles.uuutWwiB}>Previous</Text>
        </TouchableOpacity>
      </View>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI32");
    }}><Text style={_styles.YkKkmvOF}>{"Submit Offer"}</Text></Pressable></ScrollView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  WmndUBDO: {
    flex: 1
  },
  QehqASRo: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  AwxCOTsP: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  OcgbEaKd: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  qiaOylVn: {
    marginBottom: 20
  },
  mvSuPnci: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  XbKVkybP: {
    marginBottom: 10
  },
  BowZszOn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  CXyNpvlF: {
    marginBottom: 10
  },
  gBAdwkTe: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  uCYmwytU: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  pwqfUZGG: {
    marginBottom: 10
  },
  NXxZbnNT: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  brfAjUgJ: {
    marginBottom: 10
  },
  vvmRtfGR: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  hThKJjoj: {
    marginBottom: 10
  },
  MAcdKDvg: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  dIqrhOfS: {
    marginBottom: 10
  },
  UNlCzxmZ: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  YTDTYvxc: {
    marginBottom: 10
  },
  URDfPsYx: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  ulyJaPwI: {
    marginBottom: 10
  },
  AYtibTtg: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  alKXbFmp: {
    marginBottom: 10
  },
  GBjmsuur: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  HemUyOQU: {
    marginBottom: 10
  },
  Qbpsxfxy: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  uxVJbmYN: {
    marginBottom: 10
  },
  jFSGHWAn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  rUhkvxnj: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  grOhSWeS: {
    marginBottom: 10
  },
  dxfgywhm: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  XFPgEdlG: {
    marginBottom: 10
  },
  RDHSLNPM: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  QNwlNhnl: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  QFslcHUA: {
    marginBottom: 10
  },
  QAbbjgrU: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  IkxtMFJq: {
    marginBottom: 10
  },
  EPZsPGuf: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  HlRJVzSq: {
    marginBottom: 10
  },
  zcJRidkj: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  PDgFQSTG: {
    marginBottom: 10
  },
  rOHNNWjP: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  lMSttkRq: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  HDkABThS: {
    marginRight: 10
  },
  bfVYoptz: {
    width: 20,
    height: 20
  },
  OWXRgxCD: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  pAyeyTMh: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  },
  McJEZKpY: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20
  },
  uuutWwiB: {
    color: "#000",
    textAlign: "center",
    fontSize: 18
  },
  YkKkmvOF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});