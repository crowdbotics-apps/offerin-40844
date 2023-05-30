import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const notifications = [{
  id: 1,
  title: 'New message from John',
  summary: 'Hey, how are you doing?',
  date: '2022-10-01',
  isRead: false
}, {
  id: 2,
  title: 'New message from Sarah',
  summary: 'Can you call me back?',
  date: '2022-09-30',
  isRead: true
}, {
  id: 3,
  title: 'New message from Alex',
  summary: 'I need your help with something',
  date: '2022-09-29',
  isRead: false
}];

const NotificationListScreen = () => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationSummary}>{item.summary}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
      {!item.isRead && <View style={styles.notificationBadge} />}
    </TouchableOpacity>;

  return <View style={styles.container}>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      <TouchableOpacity style={styles.markAsReadButton}>
        <Text style={styles.markAsReadButtonText}>Mark all as read</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  notificationSummary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  notificationDate: {
    fontSize: 12,
    color: '#999'
  },
  notificationBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f00',
    marginRight: 10
  },
  markAsReadButton: {
    backgroundColor: '#f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20
  },
  markAsReadButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default NotificationListScreen;