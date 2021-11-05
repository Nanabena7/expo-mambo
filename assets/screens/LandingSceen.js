import React from "react";
import {View, Text, Button, TextInput,StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
import Logo from "../images/Logo.jpg";
import COLOURS from "../const/colours";

const landing_page = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>WELCOME to</Text>
        <Text style={styles.h2}>Providing quality but affordable adornments.</Text>
      </View>
      <View style={styles.containerRightAligned}>
        <Image source={Logo} style={styles.image}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="SIGN UP"
          style={styles.Button}
          onPress={() => this.onPress()}
          color="#000"
        />
        <Button
        title= "LOGIN"
        STYLE={styles.Button}
        onPress={() => this.onPress()}
        color= {COLOURS.gold}
        />
        </View>
    </View>
  )
}
export default landing_page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FF99CC",
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#000000',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 300,
    height:260,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  containerRightAligned: {
    position: 'absolute',
    right: 50,
    top: '50%',
    alignItems: 'stretch',   },
});