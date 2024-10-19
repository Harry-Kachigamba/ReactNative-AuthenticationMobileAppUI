import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function CreateAccountScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chef.png')} style={styles.chefIcon} />

      <Text style={styles.title}>Create an Account</Text>
      <TouchableOpacity>
        <Text style={styles.loginText}><Link href={"/login"}>Already have an accoount? Login</Link></Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none" />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry />

      <TouchableOpacity style={styles.recoveryButton}>
        <Text style={styles.recoveryText}>Recovery Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or Sign up with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <Image source={require('../assets/images/google_13170545.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/apple_731985.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/facebook_5968764.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        By clicking create account you agree to Recognotes{" "}
        <Text style={styles.linkText}>Term of use</Text> and <Text style={styles.linkText}>Privacy policy</Text>
      </Text>

    <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  loginText: {
    color: '#4A90E2',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },

  recoveryButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  recoveryText: {
    color: '#4A90E2'
  },

  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#476f95',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },

  continueText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  orText: {
    marginVertical: 20,
    color: '#888',
  },

  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },

  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  chefIcon: {
    width: 100,
    height: 150,
    resizeMode: 'contain'
  },

  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 20,
  },

  linkText: {
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
});