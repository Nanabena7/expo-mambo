import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput,TouchableOpacity,Platform,StatusBar,Alert, Dimensions } from "react-native";
import {View,Text} from "react-native";
import COLOURS from "../const/colours";
import { useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons"

//import LinearGradient from 'react-native-linear-gradient';


const LandingScreen = ({navigation}) => {
    const { COLOURS } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor= "#ffff00" 
          barStyle="light-content"/>
        <View style={styles.header}>

        </View>
        /
            <Text style={[styles.title, {
                color: COLOURS
            }] }>Welcome</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                {/* <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                > */}
                    <Text style={styles.textSign}>Get Started</Text>
                    <Icon 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
            </TouchableOpacity>
            </View>
      </View>
    );
};

export default LandingScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLOURS.violet
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: COLOURS.violet,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: COLOURS.gold,
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: COLOURS.gold,
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});