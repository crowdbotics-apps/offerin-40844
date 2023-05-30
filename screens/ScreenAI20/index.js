import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PropertyOfferScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Approval Required</Text>
      </View>
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>
          This offer has not been sent to the sellers. You must approve it with the button below. Once you approve the offer, sellers will receive the notification that you have set up for them and be able to view the offer in their portal. You can make changes to the offer prior to approving it.
        </Text>
        <TouchableOpacity style={styles.approveButton}>
          <Text style={styles.approveButtonText}>Approve This Offer To Send To Seller(s)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.peopleContainer}>
        <Text style={styles.peopleText}>People</Text>
        <Text style={styles.agentName}>Buyer’s real estate agent name</Text>
        <Text style={styles.buyerName}>Buyer’s name</Text>
      </View>
      <View style={styles.financialContainer}>
        <Text style={styles.financialText}>Financial</Text>
        <Text style={styles.purchasePrice}>Purchase Price</Text>
        <Text style={styles.escalationClause}>Escalation Clause</Text>
        <Text style={styles.listingBrokerCommission}>Seller paid listing broker commission</Text>
        <Text style={styles.closingCost}>Seller paid closing cost on behalf of the buyer</Text>
        <Text style={styles.buyingBrokerCommission}>Seller paid Buying broker commission</Text>
        <Text style={styles.titleAndEscrowFees}>Seller paid Title and Escrow Fees</Text>
        <Text style={styles.conveyanceFees}>Seller paid County Conveyance Fees</Text>
        <Text style={styles.homeWarranty}>Home warranty</Text>
        <Text style={styles.netReturn}>Estimated Net Return + $ (x)</Text>
        <Text style={styles.earnestMoney}>Earnest Money</Text>
        <Text style={styles.financingType}>Financing Type</Text>
        <Text style={styles.appraisalGapCoverage}>Buyer appraisal gap coverage</Text>
        <Text style={styles.propertySaleContingency}>Property sale contingency</Text>
      </View>
      <View style={styles.datesContainer}>
        <Text style={styles.datesText}>Dates</Text>
        <Text style={styles.closingDate}>Closing date</Text>
        <Text style={styles.possessionDate}>Possession date</Text>
      </View>
      <View style={styles.inspectionsContainer}>
        <Text style={styles.inspectionsText}>Inspections</Text>
        <Text style={styles.generalInspection}>General</Text>
        <Text style={styles.woodDestroyingInsect}>Wood destroying insect</Text>
      </View>
      <View style={styles.documentsContainer}>
        <Text style={styles.documentsText}>Documents</Text>
        {
        /* Pre-loaded documents */
      }
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>Note to listing agent and seller</Text>
        <Text style={styles.noteFromBuyer}>Note from buyer’s agent</Text>
      </View>
      <View style={styles.captchaContainer}>
        {
        /* Captcha integration */
      }
        <Text style={styles.captchaText}>I’m not a robot</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  offerContainer: {
    marginBottom: 20
  },
  offerText: {
    fontSize: 16,
    marginBottom: 10
  },
  approveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  approveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  peopleContainer: {
    marginBottom: 20
  },
  peopleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  agentName: {
    fontSize: 16,
    marginBottom: 5
  },
  buyerName: {
    fontSize: 16,
    marginBottom: 5
  },
  financialContainer: {
    marginBottom: 20
  },
  financialText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  purchasePrice: {
    fontSize: 16,
    marginBottom: 5
  },
  escalationClause: {
    fontSize: 16,
    marginBottom: 5
  },
  listingBrokerCommission: {
    fontSize: 16,
    marginBottom: 5
  },
  closingCost: {
    fontSize: 16,
    marginBottom: 5
  },
  buyingBrokerCommission: {
    fontSize: 16,
    marginBottom: 5
  },
  titleAndEscrowFees: {
    fontSize: 16,
    marginBottom: 5
  },
  conveyanceFees: {
    fontSize: 16,
    marginBottom: 5
  },
  homeWarranty: {
    fontSize: 16,
    marginBottom: 5
  },
  netReturn: {
    fontSize: 16,
    marginBottom: 5
  },
  earnestMoney: {
    fontSize: 16,
    marginBottom: 5
  },
  financingType: {
    fontSize: 16,
    marginBottom: 5
  },
  appraisalGapCoverage: {
    fontSize: 16,
    marginBottom: 5
  },
  propertySaleContingency: {
    fontSize: 16,
    marginBottom: 5
  },
  datesContainer: {
    marginBottom: 20
  },
  datesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  closingDate: {
    fontSize: 16,
    marginBottom: 5
  },
  possessionDate: {
    fontSize: 16,
    marginBottom: 5
  },
  inspectionsContainer: {
    marginBottom: 20
  },
  inspectionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  generalInspection: {
    fontSize: 16,
    marginBottom: 5
  },
  woodDestroyingInsect: {
    fontSize: 16,
    marginBottom: 5
  },
  documentsContainer: {
    marginBottom: 20
  },
  documentsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  noteContainer: {
    marginBottom: 20
  },
  noteText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  noteFromBuyer: {
    fontSize: 16,
    marginBottom: 5
  },
  captchaContainer: {
    marginBottom: 20
  },
  captchaText: {
    fontSize: 16,
    marginBottom: 5
  }
});
export default PropertyOfferScreen;