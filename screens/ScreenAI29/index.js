import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const [closingDate, setClosingDate] = useState('');
  const [possessionDate, setPossessionDate] = useState('');
  const [loanCommitmentDate, setLoanCommitmentDate] = useState('');
  const [generalInspection, setGeneralInspection] = useState(false);
  const [woodDestroyingInsect, setWoodDestroyingInsect] = useState(false);
  const [radon, setRadon] = useState(false);
  const [septic, setSeptic] = useState(false);
  const [well, setWell] = useState(false);
  const [mold, setMold] = useState(false);
  const [other, setOther] = useState(false);
  return <View style={_styles.MsCuIFZc}>
      <TouchableOpacity onPress={() => console.log('Back button pressed')}>
        <Text style={_styles.hGAuZIsd}>Back</Text>
      </TouchableOpacity>
      <Text style={_styles.rsaXccML}>Dates</Text>
      <Text style={_styles.odpuTdHm}>Closing date</Text>
      <TextInput style={_styles.kEKvwmBs} onChangeText={text => setClosingDate(text)} value={closingDate} />
      <Text style={_styles.HDDfjfkc}>Possession date</Text>
      <TextInput style={_styles.rgwXooBr} onChangeText={text => setPossessionDate(text)} value={possessionDate} />
      <Text style={_styles.MaAapitt}>Loan commitment date</Text>
      <TextInput style={_styles.GUfZsJDN} onChangeText={text => setLoanCommitmentDate(text)} value={loanCommitmentDate} />
      <Text style={_styles.iCCqUVie}>Inspections</Text>
      <Text style={_styles.NGyvTMdQ}>Select the inspection below. Select the amount of days and who is going to pay for the inspection.</Text>
      <View style={_styles.FSjtGxTB}>
        <CheckBox value={generalInspection} onValueChange={setGeneralInspection} />
        <Text style={_styles.MQMEGoiZ}>General Inspection</Text>
      </View>
      <View style={_styles.yGYbXIQF}>
        <CheckBox value={woodDestroyingInsect} onValueChange={setWoodDestroyingInsect} />
        <Text style={_styles.fJravfgl}>Wood destroying Insect</Text>
      </View>
      <View style={_styles.JiznqjsL}>
        <CheckBox value={radon} onValueChange={setRadon} />
        <Text style={_styles.LouQAMEI}>Radon</Text>
      </View>
      <View style={_styles.gRVtpEiC}>
        <CheckBox value={septic} onValueChange={setSeptic} />
        <Text style={_styles.RSPwELDI}>Septic</Text>
      </View>
      <View style={_styles.suXCrqes}>
        <CheckBox value={well} onValueChange={setWell} />
        <Text style={_styles.PnnUGdJf}>Well</Text>
      </View>
      <View style={_styles.QxpmSsNN}>
        <CheckBox value={mold} onValueChange={setMold} />
        <Text style={_styles.NKpAuZeW}>Mold</Text>
      </View>
      <View style={_styles.YDzrbBVe}>
        <CheckBox value={other} onValueChange={setOther} />
        <Text style={_styles.XvntWrzg}>Other</Text>
      </View>
      <View style={_styles.whbzfFUL}>
        <TouchableOpacity onPress={() => console.log('Previous button pressed')}>
          <Text style={_styles.ceARLysu}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Next button pressed')}>
          <Text style={_styles.kRMXhChC}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  MsCuIFZc: {
    flex: 1,
    padding: 20
  },
  hGAuZIsd: {
    fontSize: 18,
    marginBottom: 20
  },
  rsaXccML: {
    fontSize: 24,
    marginBottom: 20
  },
  odpuTdHm: {
    fontSize: 16,
    marginBottom: 10
  },
  kEKvwmBs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  HDDfjfkc: {
    fontSize: 16,
    marginBottom: 10
  },
  rgwXooBr: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  MaAapitt: {
    fontSize: 16,
    marginBottom: 10
  },
  GUfZsJDN: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  iCCqUVie: {
    fontSize: 24,
    marginBottom: 20
  },
  NGyvTMdQ: {
    fontSize: 16,
    marginBottom: 10
  },
  FSjtGxTB: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  MQMEGoiZ: {
    fontSize: 16,
    marginLeft: 10
  },
  yGYbXIQF: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  fJravfgl: {
    fontSize: 16,
    marginLeft: 10
  },
  JiznqjsL: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  LouQAMEI: {
    fontSize: 16,
    marginLeft: 10
  },
  gRVtpEiC: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  RSPwELDI: {
    fontSize: 16,
    marginLeft: 10
  },
  suXCrqes: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  PnnUGdJf: {
    fontSize: 16,
    marginLeft: 10
  },
  QxpmSsNN: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  NKpAuZeW: {
    fontSize: 16,
    marginLeft: 10
  },
  YDzrbBVe: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  XvntWrzg: {
    fontSize: 16,
    marginLeft: 10
  },
  whbzfFUL: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  ceARLysu: {
    fontSize: 18
  },
  kRMXhChC: {
    fontSize: 18
  }
});