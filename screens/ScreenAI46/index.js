import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [ccv, setCcv] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  return <Pressable onPress={() => {
    navigation.navigate("ScreenAI44");
  }}><View style={_styles.slozrxVF}>
      <View style={_styles.RhQnwtPW}>
        <Text style={_styles.EsaHayzE}>Choose a payment option</Text>
        <View style={_styles.MoIHZcCJ}>
          <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.LeqRmzDh} />
          <Text style={_styles.AQvvmOKy}>Credit card</Text>
        </View>
        <View style={_styles.FJMDlPlR}>
          <Text style={_styles.RzLHzoTJ}>Cardholder</Text>
          <TextInput style={_styles.kRnaJkwa} value={cardholder} onChangeText={setCardholder} />
        </View>
        <View style={_styles.LCSayFvs}>
          <Text style={_styles.dndIphqb}>Card number</Text>
          <TextInput style={_styles.LdYJwwim} value={cardNumber} onChangeText={setCardNumber} />
        </View>
        <View style={_styles.esKMxTEA}>
          <View style={_styles.HdLadrqI}>
            <Text style={_styles.naqskISv}>Expiration date</Text>
            <TextInput style={_styles.ePHgmFXO} value={expirationDate} onChangeText={setExpirationDate} />
          </View>
          <View style={_styles.ANpMuXtd}>
            <Text style={_styles.UdWIYhNb}>CCV</Text>
            <TextInput style={_styles.DMKYloDb} value={ccv} onChangeText={setCcv} />
          </View>
        </View>
        <TouchableOpacity style={_styles.UJAlLSVl} onPress={() => setShowConfirmation(true)}>
          <Text style={_styles.gCddOjUT}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.MIagmLsj}>
          <Text style={_styles.YmOQDRmj}>Paypal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.OxKJGPRd}>
          <Text style={_styles.aUaGVlBC}>Apple pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.hhpOiSPk}>
          <Text style={_styles.byjnUecf}>Google pay</Text>
        </TouchableOpacity>
      </View>
      {showConfirmation && <View style={_styles.MSZTXzHu}>
          <View style={_styles.jxptRtnB}>
            <Text style={_styles.BFWdSzao}>Confirm payment?</Text>
            <View style={_styles.eiQzQXBz}>
              <TouchableOpacity style={_styles.RhyNoiLq} onPress={() => setShowConfirmation(false)}>
                <Text style={_styles.uhbkEmlp}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={_styles.OVzepjwx} onPress={() => console.log('Payment confirmed')}>
                <Text style={_styles.XKKxVaTH}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>}
    </View></Pressable>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  slozrxVF: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  RhQnwtPW: {
    marginTop: 40
  },
  EsaHayzE: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  MoIHZcCJ: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  LeqRmzDh: {
    width: 30,
    height: 20,
    marginRight: 10
  },
  AQvvmOKy: {
    fontSize: 16
  },
  FJMDlPlR: {
    marginBottom: 20
  },
  RzLHzoTJ: {
    fontSize: 16,
    marginBottom: 5
  },
  kRnaJkwa: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  LCSayFvs: {
    marginBottom: 20
  },
  dndIphqb: {
    fontSize: 16,
    marginBottom: 5
  },
  LdYJwwim: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  esKMxTEA: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  HdLadrqI: {
    width: "48%"
  },
  naqskISv: {
    fontSize: 16,
    marginBottom: 5
  },
  ePHgmFXO: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  ANpMuXtd: {
    width: "48%"
  },
  UdWIYhNb: {
    fontSize: 16,
    marginBottom: 5
  },
  DMKYloDb: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10
  },
  UJAlLSVl: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  gCddOjUT: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  MIagmLsj: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  YmOQDRmj: {
    color: "#000",
    fontSize: 16,
    textAlign: "center"
  },
  OxKJGPRd: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  aUaGVlBC: {
    color: "#000",
    fontSize: 16,
    textAlign: "center"
  },
  hhpOiSPk: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  byjnUecf: {
    color: "#000",
    fontSize: 16,
    textAlign: "center"
  },
  MSZTXzHu: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  jxptRtnB: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  },
  BFWdSzao: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  eiQzQXBz: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  RhyNoiLq: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "48%"
  },
  uhbkEmlp: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  OVzepjwx: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    width: "48%"
  },
  XKKxVaTH: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  }
});