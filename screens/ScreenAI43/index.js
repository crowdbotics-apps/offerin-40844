import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState([]);
  const [outstandingInvitations, setOutstandingInvitations] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  const handleSendInvitation = () => {// handle sending invitation logic
  };

  const handleEditRole = userId => {// handle editing role logic
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Invite A User</Text>
        <Text style={styles.sectionText}>Fill out the name, email and role(s) for the user on the account and then click Send Invitation.</Text>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Role(s)" value={roles} onChangeText={setRoles} />
        <TouchableOpacity style={styles.button} onPress={handleSendInvitation}>
          <Text style={styles.buttonText}>Send Invitation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Outstanding Invitation</Text>
        <Text style={styles.sectionText}>List of all outstanding Invitations</Text>
        <View style={styles.dropdown}>
          {
          /* render dropdown with outstanding invitations */
        }
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Active Users</Text>
        <Text style={styles.sectionText}>List of all active users</Text>
        {activeUsers.map(user => <View key={user.id} style={styles.user}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <Text style={styles.userRole}>{user.role}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEditRole(user.id)}>
              <Text style={styles.editButtonText}>Edit Role</Text>
            </TouchableOpacity>
          </View>)}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 30,
    height: 30
  },
  section: {
    marginBottom: 30
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  user: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 5
  },
  userRole: {
    fontSize: 16,
    marginBottom: 5
  },
  editButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginTop: 10
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14
  }
});
export default ScreenComponent;