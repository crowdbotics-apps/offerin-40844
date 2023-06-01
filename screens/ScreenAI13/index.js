import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isEditMode, setIsEditMode] = useState(false);
  const [fullName, setFullName] = useState('John Doe');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [brokerageName, setBrokerageName] = useState('');
  const [isPartOfTeam, setIsPartOfTeam] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSaveChanges = () => {
    setIsEditMode(false); // Save changes logic here
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.profileImage} />
      <TouchableOpacity style={styles.editProfileButton} onPress={() => setIsEditMode(true)}>
        <Pressable onPress={() => {
        navigation.navigate("Camera");
      }}><Text style={styles.editProfileButtonText}>Edit</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.profileStatsContainer}>
        <Text style={styles.profileStat}>100 Posts</Text>
        <Text style={styles.profileStat}>200 Followers</Text>
        <Text style={styles.profileStat}>300 Following</Text>
      </View>
      {isEditMode ? <TouchableOpacity style={styles.saveChangesButton} onPress={handleSaveChanges}>
          <Text style={styles.saveChangesButtonText}>Save</Text>
        </TouchableOpacity> : null}
      <Pressable><View style={styles.profileInfoContainer}>
        <Text style={styles.label}>Full Name *</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} editable={isEditMode} />
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} editable={isEditMode} />
        <Text style={styles.label}>Email *</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={isEditMode} keyboardType="email-address" />
        <Text style={styles.label}>Bio</Text>
        <TextInput style={[styles.input, styles.bioInput]} value={bio} onChangeText={setBio} editable={isEditMode} multiline />
        <Text style={styles.label}>Mobile Phone Number</Text>
        <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} editable={isEditMode} keyboardType="phone-pad" />
        <Text style={styles.label}>Brokerage Name</Text>
        <TextInput style={styles.input} value={brokerageName} onChangeText={setBrokerageName} editable={isEditMode} />
        <Text style={styles.label}>Are You Part of a Team</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>No</Text>
          <Switch value={isPartOfTeam} onValueChange={setIsPartOfTeam} />
          <Text style={styles.toggleLabel}>Yes</Text>
        </View>
        {isPartOfTeam ? <>
            <Text style={styles.label}>Team Name</Text>
            <TextInput style={styles.input} value={teamName} onChangeText={setTeamName} editable={isEditMode} />
          </> : null}
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} value={dateOfBirth} onChangeText={setDateOfBirth} editable={isEditMode} />
        <Text style={styles.label}>Gender</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.genderButton, gender === 'Female' && styles.genderButtonSelected]} onPress={() => setGender('Female')} disabled={!isEditMode}>
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.genderButton, gender === 'Male' && styles.genderButtonSelected]} onPress={() => setGender('Male')} disabled={!isEditMode}>
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.genderButton, gender === 'Prefer not to say' && styles.genderButtonSelected]} onPress={() => setGender('Prefer not to say')} disabled={!isEditMode}>
            <Text style={styles.genderButtonText}>Prefer not to say</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value={streetAddress} onChangeText={setStreetAddress} editable={isEditMode} />
        <TextInput style={styles.input} value={city} onChangeText={setCity} editable={isEditMode} />
        <TextInput style={styles.input} value={zipCode} onChangeText={setZipCode} editable={isEditMode} />
        <TextInput style={styles.input} value={state} onChangeText={setState} editable={isEditMode} />
        <TextInput style={styles.input} value={country} onChangeText={setCountry} editable={isEditMode} />
      </View></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 50,
    marginBottom: 20
  },
  editProfileButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  profileStatsContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  profileStat: {
    flex: 1,
    textAlign: 'center'
  },
  saveChangesButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  saveChangesButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  profileInfoContainer: {
    width: '100%'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  bioInput: {
    height: 100
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  toggleLabel: {
    fontSize: 16,
    marginRight: 10
  },
  genderButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10
  },
  genderButtonSelected: {
    backgroundColor: '#007AFF'
  },
  genderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ProfileScreen;