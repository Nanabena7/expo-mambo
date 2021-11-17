import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {View,Text,Dimensions, ImageBackground, SafeAreaView, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import COLOURS from "../const/colours";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"
import Jewellery from "../jewellery/jewellery";
import home from "../images/home.jpg";
import Cart from "./CartScreen";

const width = Dimensions.get("screen").width/2-30;
const HomeScreen = ({navigation}) => {

   
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                setStatusBarBackgroundColor: '#FA8072',
            }}>
               <ImageBackground style={{flex: 1,}}
        source= {home} resizeMode= 'cover' > 
            <View style={style.header}>
                <View>
                    <Text style ={{fontSize:26, fontWeight:'bold', colour: COLOURS.white}}> WELCOME</Text>
                    <Text style ={{ fontSize:16, fontStyle: 'italic', colour: COLOURS.gold}}>to</Text>
                    <Text style ={{ fontSize:38, fontWeight: 'bold', fontStyle: 'italic', fontWeight: 'bold', colour: COLOURS.purple}}>MAMBO</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <Icon name= "shoppingcart" size= {28}/>
               <View style= {{marginTop:30,flexDirection: 'row',}}>
                   <View style= {style.searchcontainer}>
                       <Icon name= "search1" size={30} style={{marginleft: 20}}/>
                       <TextInput placeholder="Search" style={style.input}/>
                    </View>
                    <View style={style.sortBtn}>
                        <Icon1 name="sort" size={30} color={COLOURS.purple}/>
                    </View>
            </View>
        
            </TouchableOpacity>
           </View>
            <View>
               <ScrollView>
                   <View style={style.Cards}>
                   {
                   Jewellery.map((item,index)=>(
                        <View key={item.id} style={style.Card}>
                            <View><Image source={item.img}/> </View>
                            <Text> {item.name}</Text>
                            <Text> {item.price}</Text>
                        </View>
                   ))
                   }
                   </View>
               </ScrollView>
               </View>
               <TouchableOpacity>
                  
                    </TouchableOpacity>
                    
               </ImageBackground>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchcontainer:{
        height: 50,
        backgroundColor: COLOURS.white,
        borderRadius:10,
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
    },
    input:{
        fontSize: 18,
        fontWeight: "bold",
        color: COLOURS.purple,
        flex: 1,
    },
    sortBtn: {
        marginLeft: 10,
        height: 55,
        width: 50,
        backgroundColor: COLOURS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    Cards: {
        backgroundColor: COLOURS.white,
        flexDirection:'row',
        flexWrap: 'wrap',
        marginLeft: 30
    },
    Card: {
        backgroundColor: COLOURS.white,
       width: 150,
       height:150
    }
})

export default HomeScreen;