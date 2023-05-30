import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [escalationClause, setEscalationClause] = useState(false);
  const [maxPurchasePrice, setMaxPurchasePrice] = useState('');
  const [amountToExceed, setAmountToExceed] = useState('');
  const [sellerClosingCost, setSellerClosingCost] = useState('');
  const [sellerBrokerCommission, setSellerBrokerCommission] = useState('');
  const [homeWarranty, setHomeWarranty] = useState(false);
  const [homeWarrantyPaidBy, setHomeWarrantyPaidBy] = useState('');
  const [homeWarrantyCompany, setHomeWarrantyCompany] = useState('');
  const [homeWarrantyCost, setHomeWarrantyCost] = useState('');
  const [financingType, setFinancingType] = useState('');
  const [appraisalGapCoverage, setAppraisalGapCoverage] = useState(false);
  const [appraisalShortage, setAppraisalShortage] = useState('');
  const [loanOfficerName, setLoanOfficerName] = useState('');
  const [loanOfficerCompany, setLoanOfficerCompany] = useState('');
  const [loanOfficerPhoneNumber, setLoanOfficerPhoneNumber] = useState('');
  const [loanOfficerEmail, setLoanOfficerEmail] = useState('');
  const [contingentUponSale, setContingentUponSale] = useState(false);
  const [contingentPropertyAddress, setContingentPropertyAddress] = useState('');
  const [contingentPropertyStatus, setContingentPropertyStatus] = useState('');
  const [contingentPropertyClosingDate, setContingentPropertyClosingDate] = useState('');
  const [earnestMoneyAmount, setEarnestMoneyAmount] = useState('');
  const [earnestMoneyHeldBy, setEarnestMoneyHeldBy] = useState('');
  const [earnestMoneyType, setEarnestMoneyType] = useState('');
  const [earnestMoneyDepositedUpon, setEarnestMoneyDepositedUpon] = useState('');
  return <View style={_styles.MfjLfhPN}>
      <View style={_styles.lzbpCeUo}>
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Purchase Price" value={purchasePrice} onChangeText={setPurchasePrice} style={_styles.xxVxzEGF} />
      <Text style={_styles.riXhsNqh}>Is there an escalation clause?</Text>
      <TouchableOpacity onPress={() => setEscalationClause(!escalationClause)} style={_styles.WCgXIfmJ}>
        <Text style={_styles.DzmYwqFQ}>{escalationClause ? 'Yes' : 'No'}</Text>
        <View style={_styles.nmqcDmVL}>
          <Text>{escalationClause ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableOpacity>
      {escalationClause && <>
          <TextInput placeholder="Maximum Purchase Price" value={maxPurchasePrice} onChangeText={setMaxPurchasePrice} style={_styles.ZoOoeoih} />
          <TextInput placeholder="Amount to Exceed Next Lowest Offer" value={amountToExceed} onChangeText={setAmountToExceed} style={_styles.vqzENFky} />
        </>}
      <TextInput placeholder="Seller Paid Closing Cost on Behalf of the Buyer" value={sellerClosingCost} onChangeText={setSellerClosingCost} style={_styles.PTtwYvCg} />
      <TextInput placeholder="Seller Paid Buyer’s Broker Commission" value={sellerBrokerCommission} onChangeText={setSellerBrokerCommission} style={_styles.rBEuFDXT} />
      <Text style={_styles.NlMhWdDe}>Is there a Home Warranty?</Text>
      <TouchableOpacity onPress={() => setHomeWarranty(!homeWarranty)} style={_styles.FTnWIdDS}>
        <Text style={_styles.fWOFkaOS}>{homeWarranty ? 'Yes' : 'No'}</Text>
        <View style={_styles.BjLbVSWy}>
          <Text>{homeWarranty ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableOpacity>
      {homeWarranty && <>
          <TextInput placeholder="Home Warranty Company" value={homeWarrantyCompany} onChangeText={setHomeWarrantyCompany} style={_styles.CullkuTF} />
          <TextInput placeholder="Home Warranty Cost" value={homeWarrantyCost} onChangeText={setHomeWarrantyCost} style={_styles.DtnhZvxz} />
          <TextInput placeholder="Home Warranty Paid By" value={homeWarrantyPaidBy} onChangeText={setHomeWarrantyPaidBy} style={_styles.fmEDlTEh} />
        </>}
      <Text style={_styles.FUSHFABF}>Financing</Text>
      <TextInput placeholder="Financing Type" value={financingType} onChangeText={setFinancingType} style={_styles.NpOAzyJu} />
      <Text style={_styles.QHhcjutr}>Is there appraisal gap coverage?</Text>
      <TouchableOpacity onPress={() => setAppraisalGapCoverage(!appraisalGapCoverage)} style={_styles.owMESrTu}>
        <Text style={_styles.XcbHyxea}>{appraisalGapCoverage ? 'Yes' : 'No'}</Text>
        <View style={_styles.axCLhXRq}>
          <Text>{appraisalGapCoverage ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableOpacity>
      {appraisalGapCoverage && <TextInput placeholder="How much is the buyer going to cover of an appraisal shortage?" value={appraisalShortage} onChangeText={setAppraisalShortage} style={_styles.JHsIKIyi} />}
      <TextInput placeholder="Loan Officer Name" value={loanOfficerName} onChangeText={setLoanOfficerName} style={_styles.POHIHMaL} />
      <TextInput placeholder="Loan Officer Company" value={loanOfficerCompany} onChangeText={setLoanOfficerCompany} style={_styles.BaZgNWBm} />
      <TextInput placeholder="Loan Officer Phone Number" value={loanOfficerPhoneNumber} onChangeText={setLoanOfficerPhoneNumber} style={_styles.LYGEWtKh} />
      <TextInput placeholder="Loan Officer Email" value={loanOfficerEmail} onChangeText={setLoanOfficerEmail} style={_styles.SepeNdry} />
      <Text style={_styles.fLRCWJlF}>Is this offer contingent upon the sale of another property?</Text>
      <TouchableOpacity onPress={() => setContingentUponSale(!contingentUponSale)} style={_styles.MmuRiUiD}>
        <Text style={_styles.UgyGkLwC}>{contingentUponSale ? 'Yes' : 'No'}</Text>
        <View style={_styles.vyZDinSR}>
          <Text>{contingentUponSale ? 'ON' : 'OFF'}</Text>
        </View>
      </TouchableOpacity>
      {contingentUponSale && <>
          <TextInput placeholder="Contingent Property Address" value={contingentPropertyAddress} onChangeText={setContingentPropertyAddress} style={_styles.iMvqzDCI} />
          <TextInput placeholder="Contingent Property Status" value={contingentPropertyStatus} onChangeText={setContingentPropertyStatus} style={_styles.enwphrir} />
          <TextInput placeholder="Contingent Property Closing Date" value={contingentPropertyClosingDate} onChangeText={setContingentPropertyClosingDate} style={_styles.mFSYZmrH} />
        </>}
      <Text style={_styles.OIoLPEdu}>Earnest Money</Text>
      <TextInput placeholder="Earnest Money Amount" value={earnestMoneyAmount} onChangeText={setEarnestMoneyAmount} style={_styles.KVxiBWkQ} />
      <TextInput placeholder="Earnest Money Held By" value={earnestMoneyHeldBy} onChangeText={setEarnestMoneyHeldBy} style={_styles.ebapDFKN} />
      <TextInput placeholder="Earnest Money Type" value={earnestMoneyType} onChangeText={setEarnestMoneyType} style={_styles.JkUupPog} />
      <TextInput placeholder="Earnest Money Deposited Upon" value={earnestMoneyDepositedUpon} onChangeText={setEarnestMoneyDepositedUpon} style={_styles.znlhTvWN} />
    </View>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  MfjLfhPN: {
    flex: 1,
    padding: 20
  },
  lzbpCeUo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  xxVxzEGF: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  riXhsNqh: {
    marginVertical: 10
  },
  WCgXIfmJ: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  DzmYwqFQ: {
    marginRight: 10
  },
  nmqcDmVL: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  ZoOoeoih: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  vqzENFky: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  PTtwYvCg: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  rBEuFDXT: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  NlMhWdDe: {
    marginVertical: 10
  },
  FTnWIdDS: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  fWOFkaOS: {
    marginRight: 10
  },
  BjLbVSWy: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  CullkuTF: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  DtnhZvxz: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  fmEDlTEh: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  FUSHFABF: {
    marginVertical: 10
  },
  NpOAzyJu: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  QHhcjutr: {
    marginVertical: 10
  },
  owMESrTu: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  XcbHyxea: {
    marginRight: 10
  },
  axCLhXRq: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  JHsIKIyi: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  POHIHMaL: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  BaZgNWBm: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  LYGEWtKh: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  SepeNdry: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  fLRCWJlF: {
    marginVertical: 10
  },
  MmuRiUiD: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  UgyGkLwC: {
    marginRight: 10
  },
  vyZDinSR: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  iMvqzDCI: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  enwphrir: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  mFSYZmrH: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  OIoLPEdu: {
    marginVertical: 10
  },
  KVxiBWkQ: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  ebapDFKN: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  JkUupPog: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  znlhTvWN: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  }
});