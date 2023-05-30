import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';

const PropertyDetailsScreen = () => {
  return <View style={_styles.bGkAobzr}>
      <View style={_styles.giXhhARu}>
        <TouchableOpacity>
          <Text style={_styles.VRgknoXx}>Back</Text>
        </TouchableOpacity>
        <Text style={_styles.BsVoKIIb}>Settings Tab</Text>
        <View style={_styles.XiCAViJT}></View>
      </View>
      <View style={_styles.SPIDlSXI}>
        <Text style={_styles.DmTjJaFV}>Property Details</Text>
        <View style={_styles.qtImYTwD}>
          <View style={_styles.rezvIeAp}>
            <Text style={_styles.aVZZOxOQ}>Property Status</Text>
            <Text style={_styles.LDQDHwBx}>Address Line 1</Text>
            <Text style={_styles.gqXynzLx}>City</Text>
            <Text style={_styles.DQGqEBLj}>State</Text>
            <Text style={_styles.FBFXIULP}>County</Text>
            <Text style={_styles.bZXjfxHM}>Zip</Text>
          </View>
          <View style={_styles.ikcPltyt}>
            <Text style={_styles.yxlRAGzO}>Pre-Filled</Text>
            <Text style={_styles.SMusnAqk}>Pre-Filled</Text>
            <Text style={_styles.CKjbyGrq}>Pre-Filled</Text>
            <Text style={_styles.GDfwqOcz}>Pre-Filled</Text>
            <Text style={_styles.AvaoJMgK}>Pre-Filled</Text>
            <Text style={_styles.ELaDiHGj}>Pre-Filled</Text>
          </View>
        </View>
        <View style={_styles.WzzEQGXC}>
          <Text style={_styles.yrluukpm}>Property Image</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.iDLAGyIf} />
        </View>
        <View style={_styles.bIDGPcix}>
          <Text style={_styles.bxGdgCbO}>Title and Escrow Fee Template</Text>
          <Text style={_styles.gPkGfWRH}>Pre-Filled Header Text</Text>
          <Text style={_styles.olZjQXVx}>Commission Name</Text>
          <Text style={_styles.aRmLiwna}>Commission Formula</Text>
          <Text style={_styles.kIWgUiZY}>Listing Transaction Fee</Text>
          <Text style={_styles.obORRYKZ}>Pre-Filled Header Text</Text>
          <Text style={_styles.kNMwYdRA}>Commission Name</Text>
          <Text style={_styles.LbdxbIVR}>Commission Formula</Text>
          <Text style={_styles.gKdrFCtG}>Advanced Pre-Filled Header Text</Text>
          <Text style={_styles.UnNZaGjW}>Custom Variable 1</Text>
          <Text style={_styles.lgZWMYgj}>Custom Variable 2</Text>
          <Text style={_styles.lKntZdYE}>Custom Variable 3</Text>
        </View>
        <TouchableOpacity style={_styles.yNJrCAtO}>
          <Text style={_styles.UUdRqqJN}>Edit Property Details</Text>
        </TouchableOpacity>
      </View>
      <View style={_styles.hydxUBNQ}>
        <Text style={_styles.kLhtZrjW}>People</Text>
        <Text style={_styles.xueHgGng}>Sellers</Text>
        <Text style={_styles.CBxDdnFX}>Require Listing Agent Approval prior to sending new offers to sellers?</Text>
        <View style={_styles.dyYGMrGq}>
          <Text style={_styles.gFGiVgXI}>No</Text>
          <Switch value={false} />
          <Text style={_styles.ixqDUHuk}>Yes</Text>
        </View>
        <Text style={_styles.iFnwLdxO}>Note: Sellers can always see the total # of offers on a property, even if one has not been approved to be sent to them. The seller offer portal also shows what time an offer was submitted, regardless of when it was approved to send to a seller.</Text>
        <Text style={_styles.adxShpRN}>Name</Text>
        <Text style={_styles.cbISnUKz}>Email</Text>
        <Text style={_styles.VahJLUmq}>Mobile Phone</Text>
        <Text style={_styles.ZNPcGQLa}>Notify By Email For A New Offer</Text>
        <Text style={_styles.MuQSbtbl}>Notify By Text Message For A New Offer</Text>
        <TouchableOpacity style={_styles.PHukBZnl}>
          <Text style={_styles.mZuPoILn}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.gykjwmrm}>
          <Text style={_styles.PxHRuHpu}>Remove</Text>
        </TouchableOpacity>
        <Text style={_styles.boSdTyTX}>Listing Agent</Text>
        <Text style={_styles.HJVwGaua}>Name</Text>
        <Text style={_styles.jVZUeNYf}>Email</Text>
        <Text style={_styles.OpYAMwuJ}>Mobile Phone</Text>
        <Text style={_styles.TXMgGZQY}>Notify By Email For A New Offer</Text>
        <Text style={_styles.XZBmwvyA}>Notify By Text Message For A New Offer</Text>
        <TouchableOpacity style={_styles.enRkichh}>
          <Text style={_styles.tBzqeGwu}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.qXGnRfSP}>
          <Text style={_styles.GMoRBubu}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.jXpiewhD}>
          <Text style={_styles.FNKubEit}>Request Highest & best Offer</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

export default PropertyDetailsScreen;

const _styles = StyleSheet.create({
  bGkAobzr: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  giXhhARu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40
  },
  VRgknoXx: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  BsVoKIIb: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  XiCAViJT: {
    width: 50
  },
  SPIDlSXI: {
    marginTop: 40
  },
  DmTjJaFV: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  qtImYTwD: {
    flexDirection: "row",
    marginTop: 20
  },
  rezvIeAp: {
    flex: 1
  },
  aVZZOxOQ: {
    fontSize: 16,
    color: "#000"
  },
  LDQDHwBx: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  gqXynzLx: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  DQGqEBLj: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  FBFXIULP: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  bZXjfxHM: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  ikcPltyt: {
    flex: 1
  },
  yxlRAGzO: {
    fontSize: 16,
    color: "#000"
  },
  SMusnAqk: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  CKjbyGrq: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  GDfwqOcz: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  AvaoJMgK: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  ELaDiHGj: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  WzzEQGXC: {
    marginTop: 40
  },
  yrluukpm: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  iDLAGyIf: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  bIDGPcix: {
    marginTop: 40
  },
  bxGdgCbO: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  gPkGfWRH: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  olZjQXVx: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  aRmLiwna: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  kIWgUiZY: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  obORRYKZ: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  kNMwYdRA: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  LbdxbIVR: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  gKdrFCtG: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  UnNZaGjW: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  lgZWMYgj: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  lKntZdYE: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  yNJrCAtO: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40
  },
  UUdRqqJN: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  hydxUBNQ: {
    marginTop: 40
  },
  kLhtZrjW: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  xueHgGng: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  CBxDdnFX: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  dyYGMrGq: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  gFGiVgXI: {
    fontSize: 16,
    color: "#000"
  },
  ixqDUHuk: {
    fontSize: 16,
    color: "#000"
  },
  iFnwLdxO: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  adxShpRN: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  cbISnUKz: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  VahJLUmq: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  ZNPcGQLa: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  MuQSbtbl: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  PHukBZnl: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  mZuPoILn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  gykjwmrm: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  PxHRuHpu: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  boSdTyTX: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  HJVwGaua: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  jVZUeNYf: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  OpYAMwuJ: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  TXMgGZQY: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  XZBmwvyA: {
    fontSize: 16,
    color: "#000",
    marginTop: 20
  },
  enRkichh: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  tBzqeGwu: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  qXGnRfSP: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  GMoRBubu: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  jXpiewhD: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40
  },
  FNKubEit: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});