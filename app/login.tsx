import { Link } from 'expo-router';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
    return (
     <View style={styles.container}>
        <Image source={require('../assets/images/chef.png')} style={styles.chefImage} />

        <Text style={styles.loginTitle}>Login to Account</Text>

        <TouchableOpacity>
            <Text style={styles.registerText}><Link href={"/"}>Don't have an Account?</Link></Text>
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

        <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <StatusBar style='dark' />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF'
    },

    chefImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain'
    },

    loginTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    registerText: {
        color: '#4A90E2',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },

    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16
    },

    submitButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#476f95',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20
    },

    submitText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

