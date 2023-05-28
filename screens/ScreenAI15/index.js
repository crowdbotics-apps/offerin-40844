import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const ScreenComponent = () => {
  const [buyerNames, setBuyerNames] = useState([]);
  const [titleCompany, setTitleCompany] = useState('');
  const [realEstateAgent, setRealEstateAgent] = useState({
    name: '',
    brokerage: '',
    phoneNumber: '',
    email: ''
  });

  const handleAddBuyer = () => {
    setBuyerNames([...buyerNames, '']);
  };

  const handleBuyerNameChange = (text, index) => {
    const newBuyerNames = [...buyerNames];
    newBuyerNames[index] = text;
    setBuyerNames(newBuyerNames);
  };

  const handleTitleCompanyChange = text => {
    setTitleCompany(text);
  };

  const handleRealEstateAgentChange = (key, text) => {
    setRealEstateAgent({ ...realEstateAgent,
      [key]: text
    });
  };

  return <View style={_styles.JpMMoexU}>
      <View style={_styles.bcbdNOXR}>
        <View style={_styles.AOHehMlC}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.DNMAtvOg} />
          <Text style={_styles.hTPnUaQM}>Welcome (User’s Full Name)</Text>
        </View>
        <View style={_styles.fqphCasa}>
          <Text style={_styles.vYiYmyUf}>Profile (Real Estate Agent’s Name & Location)</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.dMuAgakB} />
        </View>
      </View>
      <View style={_styles.faWyXhQG}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.mTUlOGqD} />
        <View style={_styles.yPaUanlI}>
          <Text style={_styles.gLiqrHnF}>Address</Text>
          <Text>City (Pre-Filled)</Text>
          <Text>State (Pre-Filled)</Text>
          <Text>Zip (Pre-Filled)</Text>
          <Text style={_styles.DlDxuHmT}>Listing Agent</Text>
          <Text>Name</Text>
          <Text>Email</Text>
          <Text>Phone Number</Text>
        </View>
      </View>
      <View style={_styles.TzJVYRoV}>
        <View style={_styles.piZVnRhx}>
          <Text style={_styles.eXNsGJQM}>Pages</Text>
        </View>
        <View style={_styles.jAUcwPeM}>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.IgOEPdfq} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.lWpFNuXJ} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.ICJxATlZ} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.BvRoPNde} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.iPKwVmrX} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={_styles.PaxFhxXp}>
        <Text style={_styles.MSmnRbON}>Submit An Offer</Text>
        <Text style={_styles.ETSJQhAg}>Buyers</Text>
        <Text style={_styles.JKGOtfQs}>Enter Buyers names Below, user ‘’Add Buyer’’ to add more buyers</Text>
        {buyerNames.map((buyerName, index) => <TextInput key={index} value={buyerName} onChangeText={text => handleBuyerNameChange(text, index)} placeholder="Buyer’s name" style={_styles.uIwVsZtu} />)}
        <TouchableOpacity onPress={handleAddBuyer} style={_styles.kPXVgknj}>
          <Text style={_styles.MkIaPmPj}>Add Buyer</Text>
        </TouchableOpacity>
        <TextInput value={titleCompany} onChangeText={handleTitleCompanyChange} placeholder="Title & Escrow Company" style={_styles.gjcjsIhE} />
        {titleCompany ? <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.KtDmDOTS} /> : null}
        <Text style={_styles.bkTouCIm}>Buyer’s real estate agent</Text>
        <TextInput value={realEstateAgent.name} onChangeText={text => handleRealEstateAgentChange('name', text)} placeholder="Name" style={_styles.ydgZowZc} />
        <TextInput value={realEstateAgent.brokerage} onChangeText={text => handleRealEstateAgentChange('brokerage', text)} placeholder="Brokerage" style={_styles.DSpmYOsW} />
        <TextInput value={realEstateAgent.phoneNumber} onChangeText={text => handleRealEstateAgentChange('phoneNumber', text)} placeholder="Phone Number" style={_styles.jMltSzQp} />
        <TextInput value={realEstateAgent.email} onChangeText={text => handleRealEstateAgentChange('email', text)} placeholder="Email" style={_styles.Grvphrgq} />
        <TouchableOpacity style={_styles.eHnSRTuv}>
          <Text style={_styles.PZVvfoqZ}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  JpMMoexU: {
    flex: 1
  },
  bcbdNOXR: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  AOHehMlC: {
    flexDirection: "row",
    alignItems: "center"
  },
  DNMAtvOg: {
    width: 50,
    height: 50
  },
  hTPnUaQM: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  fqphCasa: {
    flexDirection: "row",
    alignItems: "center"
  },
  vYiYmyUf: {
    marginRight: 10
  },
  dMuAgakB: {
    width: 30,
    height: 30
  },
  faWyXhQG: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  mTUlOGqD: {
    width: 100,
    height: 100
  },
  yPaUanlI: {
    marginLeft: 20
  },
  gLiqrHnF: {
    fontSize: 20,
    fontWeight: "bold"
  },
  DlDxuHmT: {
    marginTop: 10
  },
  TzJVYRoV: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  piZVnRhx: {
    flexDirection: "row",
    alignItems: "center"
  },
  eXNsGJQM: {
    fontSize: 20,
    fontWeight: "bold"
  },
  jAUcwPeM: {
    flexDirection: "row",
    alignItems: "center"
  },
  IgOEPdfq: {
    width: 30,
    height: 30
  },
  lWpFNuXJ: {
    width: 30,
    height: 30
  },
  ICJxATlZ: {
    width: 30,
    height: 30
  },
  BvRoPNde: {
    width: 30,
    height: 30
  },
  iPKwVmrX: {
    width: 30,
    height: 30
  },
  PaxFhxXp: {
    padding: 20
  },
  MSmnRbON: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ETSJQhAg: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  JKGOtfQs: {
    marginBottom: 10
  },
  uIwVsZtu: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  kPXVgknj: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  },
  MkIaPmPj: {
    color: "white"
  },
  gjcjsIhE: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  KtDmDOTS: {
    width: 100,
    height: 100,
    marginTop: 10
  },
  bkTouCIm: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  ydgZowZc: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  DSpmYOsW: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  jMltSzQp: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  Grvphrgq: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  eHnSRTuv: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  },
  PZVvfoqZ: {
    color: "white"
  }
});