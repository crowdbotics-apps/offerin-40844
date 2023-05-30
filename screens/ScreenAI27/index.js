import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
const activityLogs = [{
  title: 'User login',
  timestamp: '2022-01-01 10:00:00'
}, {
  title: 'User logout',
  timestamp: '2022-01-01 12:00:00'
}, {
  title: 'Error: Invalid input',
  timestamp: '2022-01-02 09:30:00'
}, {
  title: 'Error: Server down',
  timestamp: '2022-01-03 15:45:00'
}, {
  title: 'User registration',
  timestamp: '2022-01-04 11:20:00'
}, {
  title: 'User profile update',
  timestamp: '2022-01-05 14:10:00'
}, {
  title: 'Error: Network connection lost',
  timestamp: '2022-01-06 16:30:00'
}, {
  title: 'User password reset',
  timestamp: '2022-01-07 08:50:00'
}, {
  title: 'User account deletion',
  timestamp: '2022-01-08 13:15:00'
}];

const ActivityLogScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Activity Logs</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {activityLogs.map((log, index) => <View key={index} style={styles.logContainer}>
            <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.logImage} />
            <View style={styles.logTextContainer}>
              <Text style={styles.logTitle}>{log.title}</Text>
              <Text style={styles.logTimestamp}>{log.timestamp}</Text>
            </View>
          </View>)}
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#2f95dc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  scrollContainer: {
    flex: 1,
    padding: 20
  },
  logContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  logImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  logTextContainer: {
    flex: 1
  },
  logTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  logTimestamp: {
    fontSize: 14,
    color: '#666'
  }
});
export default ActivityLogScreen;