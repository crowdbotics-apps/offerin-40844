import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SearchScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Oldest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchResults}>
        <TouchableOpacity style={styles.result}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.resultImage} />
          <View style={styles.resultDetails}>
            <Text style={styles.resultTitle}>Address</Text>
            <Text style={styles.resultSubtitle}>Agent Name</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>See details</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#2c3e50'
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  searchResults: {
    flex: 1,
    padding: 20
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  resultDetails: {
    flex: 1
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  resultSubtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 10
  },
  detailsButton: {
    backgroundColor: '#2c3e50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default SearchScreen;