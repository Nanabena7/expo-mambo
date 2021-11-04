import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Button, Dimensions, FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";
import {View,Text} from "react-native";
import COLOURS from "../../const/colours";
import Icon from "react-native-vector-icons";
import jewellery from "../../jewellry";
const width = Dimensions.get("screen").width/2-30;
const HomeScreen = () => {
    const Card = (item) =>{
     return <View style= {style.card}></View>
    } 
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
                   <View style= {style.searchcontainer}>
                       <Icon name= "search" size={30} style={{marginleft: 20}}/>
                       <TextInput placeholder="Search" style={style.input}/>
                    </View>
                    <View style={style.sortBtn}>
                        <Icon name="sort" size={30} color={COLOURS.purple}/>
                    </View>

               </View>
               <FlatList 
               columnWrapperStyle={{justifyContent: 'space-between'}}
               showsVerticalScrollIndicator={false}
               contentContainerStyle= 
               {
                   {marginTop: 12},
                   {paddingBottom: 50},
                } 
               numColumns= {2}

               data={jewellery} 
               renderItem={({item})=> <Card jewellery= {item}/>}></FlatList>
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
    Card: {
        height: 230,
        backgroundColor: COLOURS.white,
        width,
        marginBottom: 20,
        marginHorizontal: 2,
        borderRadius: 10,
        padding: 20,
    }
})

export default HomeScreen;