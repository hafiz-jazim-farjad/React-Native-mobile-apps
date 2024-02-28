import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, SafeAreaView, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.ImageLogo} source={require('./assets/logo.png')} />
        <Text style={styles.WelcomeText}>Welcome!</Text>
        <Text style={styles.WelcomeText}>to <Text style={styles.TextColor}>CRM.io</Text> </Text>
        <TextInput placeholder='Enter Your Name' style={styles.InputText} />
        <TextInput placeholder='Enter Your Password' style={styles.InputPassword} />
        <Text
          // title='Login'
          style={styles.LoginButton}
          onPress={() => Alert.alert('Button Press')}
        >Login</Text>
        <Text style={styles.ForgotText}>i Forgot My Password</Text>

        <StatusBar style="auto" />
      </View>

      <View style={styles.container2}>
        <Text style={styles.BottomText1}>Wanna try our Services?</Text>
        <Text style={styles.BottomText2}>here You Are</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // main container 
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  // child container 1 
  container1: {
    flex: 2,
    width: 100 + '%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },

  ImageLogo: {
    width: 220,
    height: 220,
    objectFit: "cover",
    marginBottom: 30,
  },

  WelcomeText: {
    color: "black",
    fontSize: 25,
    fontWeight: "normal",
  },

  TextColor: {
    color: "#7441FF",
    fontWeight: "900",
  },
  InputText: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 20,
    width: 300,
    height: 40,
    marginTop: 30,
    paddingLeft: 20,
    fontSize: 16,
    color: "black",
  },
  InputPassword: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 20,
    width: 300,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 16,
    color: "black",
  },
  LoginButton: {
    backgroundColor: "#7441FF",
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 80,
    fontSize: 16,
    borderRadius: 50,
  },
  ForgotText: {
    color: "#7441FF",
    paddingVertical: 20,
  },


  // child container 2
  container2: {
    flex: 0.2,
    width: 100 + '%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  BottomText1: {
    color: "gray",
  },
  BottomText2: {
    color: "#7441FF",
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});
