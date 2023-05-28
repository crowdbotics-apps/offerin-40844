import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>{"About The APP"}</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.file}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.fileIcon} />
          <Text style={styles.fileName}>Textual file</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.file}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.fileIcon} />
          <Text style={styles.fileName}>Pictures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.file}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.fileIcon} />
          <Text style={styles.fileName}>Video</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20
  },
  backButton: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  file: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  fileIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  fileName: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;