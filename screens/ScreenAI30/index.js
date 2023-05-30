import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const ContractScreen = () => {
  const [note, setNote] = useState('');
  return <View style={_styles.dvzfjBkS}>
      <TouchableOpacity style={_styles.ZMhOvcZE}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.KvcbpCGh} />
      </TouchableOpacity>
      <Text style={_styles.CxBMVuzO}>Documents</Text>
      <Text style={_styles.SmjkVkIx}>Contract package</Text>
      <TouchableOpacity style={_styles.riORcJBn}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.ajvUHpie} />
        <Text style={_styles.kFExjtAV}>You can drag your document or click below to upload files. Select multiple files or one at a time</Text>
      </TouchableOpacity>
      <Text style={_styles.exjWizhB}>Contract Document</Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.aaybeHRp} />
      <Text style={_styles.lYgfnMXq}>Note</Text>
      <Text style={_styles.CLGVICxw}>Note to the listing Agent and seller</Text>
      <TextInput style={_styles.YbKvtFFx} multiline value={note} onChangeText={setNote} />
      <View style={_styles.VsfRJrBJ}>
        <TouchableOpacity style={_styles.eTVMiigS}>
          <Text style={_styles.xZBkCayl}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.AGkYWwwe}>
          <Text style={_styles.aTiUqxQw}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

export default ContractScreen;

const _styles = StyleSheet.create({
  dvzfjBkS: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  ZMhOvcZE: {
    marginTop: 50
  },
  KvcbpCGh: {
    width: 20,
    height: 20
  },
  CxBMVuzO: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50
  },
  SmjkVkIx: {
    fontSize: 16,
    marginTop: 20
  },
  riORcJBn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  ajvUHpie: {
    width: 20,
    height: 20
  },
  kFExjtAV: {
    fontSize: 16,
    marginLeft: 10
  },
  exjWizhB: {
    fontSize: 16,
    marginTop: 20
  },
  aaybeHRp: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  lYgfnMXq: {
    fontSize: 16,
    marginTop: 20
  },
  CLGVICxw: {
    fontSize: 16,
    marginTop: 10
  },
  YbKvtFFx: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 100,
    marginTop: 10,
    padding: 10
  },
  VsfRJrBJ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  eTVMiigS: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5
  },
  xZBkCayl: {
    fontSize: 16
  },
  AGkYWwwe: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5
  },
  aTiUqxQw: {
    fontSize: 16,
    color: "#fff"
  }
});