import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import {View,Text,Button} from "react-native";
import COLOURS from "../../const/colours";
import Icon from "react-native-vector-icons";
const HomeScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                setStatusBarBackgroundColor: COLOURS.violet,
            }}>
            <View style={style.header}>
                <View>
                    <Text style ={{fontSize:26, fontWeight:'bold', colour: COLOURS.white}}> WELCOME</Text>
                    <Text style ={{ fontSize:16, fontStyle: 'italic', colour: COLOURS.gold}}>to</Text>
                    <Text style ={{ fontSize:38, fontWeight: 'bold', fontStyle: 'italic', fontWeight: 'bold', colour: COLOURS.purple}}>MAMBO</Text>
                </View>
                <Icon name= "cart" size= {28}/>
                </View>
               <View style= {{marginTop:30,flexDirection: 'row',}}>
                   <View>
                       <Icon name= "search" size={30} style={{marginleft: 20}}/>
                       <TextInput placeholder="Search"/>
                    </View>
               </View>
            </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default HomeScreen;