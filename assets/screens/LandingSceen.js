import React from "react";
import {View, Text, Dimensions, ImageBackground, Button, TextInput,StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
import Logo from "../images/Logo.jpg";
import COLOURS from "../const/colours";
import { FontDisplay, useFonts } from "expo-font";


const landing_page = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <ImageBackground style={{flex: 1,}}
        source= {Logo} resizeMode= 'cover' >
          <View style={styles.topContainer}>
        <Text style={styles.h1}>WELCOME to MAMBO</Text>
        <Text style={styles.h2}>Providing quality but affordable adornments.</Text>
      </View>
      {/* <View style={styles.containerRightAligned}>
        <Image source={Logo} style={styles.image}/>
      </View> */}
      <View style={styles.buttonContainer}>
        <Button
          title="SIGN UP"
          style={styles.Button}
         // onPress={() => this.onPress()}
           color="#000"
        />
        <View style={{height: 10}} />

        <Button
        title= "LOGIN"
        style={{marginBottom: 30}}
       // onPress={() => this.onPress()}
        color= "#000000"
        />
        </View>
    </ImageBackground>
      
    </View>
    
  )
}
export default landing_page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#556B2F",
    // justifyContent: "center"
    
  },
  h1: {
    color: 'white',
    fontSize: 40,
    fontStyle: "italic",
    fontFamily: "Bradley Hand ITC",
    
  },
  h2: {
    color: 'white',
    fontSize: 18,
    marginTop: 8,

  },
  image: {
    marginTop: -120,
    width: 400,
    height:(Dimensions.get("window").height)*(2/3),
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 8,
    margin: 8,
    // marginBottom: 50,
    //position: 'absolute',
  },
  topContainer: {
    flex: 4,
    // marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // height: Dimensions.get("window").height/3
  },
middleContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
Button: {
    width: '40%',
    marginBottom: 10,
    backgroundColor: "#0ff762",
},
  containerRightAligned: {
    // position: 'absolute',
    right: 0,
    // top: '15%',
    // bottom: '15%',
    // alignItems: 'stretch',   
  },
});