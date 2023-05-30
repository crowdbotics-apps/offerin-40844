import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleCurrentPasswordChange = password => {
    setCurrentPassword(password);
  };

  const handleNewPasswordChange = password => {
    setNewPassword(password);
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleConfirmPasswordChange = password => {
    setConfirmPassword(password);
  };

  const checkPasswordStrength = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
      return 'strong';
    } else if (password.length >= 8) {
      return 'average';
    } else {
      return 'poor';
    }
  };

  const handleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePassword = () => {
    if (currentPassword === 'password' && newPassword === confirmPassword) {
      alert('Password changed successfully!');
    } else {
      alert('Incorrect current password or passwords do not match.');
    }
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Current Password" secureTextEntry={!showCurrentPassword} value={currentPassword} onChangeText={handleCurrentPasswordChange} />
        <TouchableOpacity onPress={handleCurrentPasswordVisibility}>
          <Text style={styles.visibilityIcon}>{showCurrentPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="New Password" secureTextEntry={!showNewPassword} value={newPassword} onChangeText={handleNewPasswordChange} />
        <TouchableOpacity onPress={handleNewPasswordVisibility}>
          <Text style={styles.visibilityIcon}>{showNewPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.passwordStrength}>{passwordStrength}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
        <TouchableOpacity onPress={handleConfirmPasswordVisibility}>
          <Text style={styles.visibilityIcon}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {newPassword !== confirmPassword && <Text style={styles.error}>Passwords do not match.</Text>}
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333'
  },
  visibilityIcon: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10
  },
  passwordStrength: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});
export default ChangePasswordScreen;