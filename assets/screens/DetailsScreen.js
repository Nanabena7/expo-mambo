import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, ImageBackground } from "react-native";
import {View,Text} from "react-native";
import COLOURS from "../const/colours";
import Icon from "react-native-vector-icons";
import{AntDesign} from '@expo/vector-icons'
import cartpic from "../images/cartpic.jpg"

const DetailsScreen = ({navigation, route}) => {
   
    const {id, name, image, price, type, colours} = route.params.data;
    
    let current = colours[0].color;
    const [productColor, setProductColor] = useState(null);
    useEffect(()=>{
		navigation.addListener("focus",()=>{
			setProductColor(current)
		})
	},[{navigation}])

        return(
            <View style={styles.container}>
                  <ImageBackground style={{flex: 1,}}
        source= {cartpic} resizeMode= 'cover' > 
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center",paddingHorizontal: 20}}>
			        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			    	    <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
			        </View>
			    <View>
				    <Text style={{fontSize: 16, fontWeight: "bold"}}>Product</Text>
		    	</View>
		    	<Text>    </Text>
		        </View>

                <View style={styles.product}>
                    <View style={styles.imageContainer}><Image source={productColor} style ={styles.image}/></View>
                    <View style={styles.details}>
                            <Text style={styles.detail}>{name}</Text>
                            <Text style={styles.detail}>{type}</Text>
                            <Text style={styles.detail}>{price}</Text>
                        <View style={{flexDirection: 'row'}}>
                            {
                                colours.map((item,index)=>(
                                    <View key={item.id} style={styles.colBtn}>
                                        <TouchableOpacity style={ {backgroundColor: "orange", width: 100, borderRadius: 20}}
                                        onPress={()=>setProductColor(item.color)}>
                                            <Text style={styles.colors}>{item.name}</Text>
                                        </TouchableOpacity>
                                     </View>)
                                )
                            }
                        </View>

                    </View>
                </View>
                </ImageBackground>
            </View>
        )
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
    },
    product:{
        flex: 1,
    },
    imageContainer:{
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: 'orange',
        borderWidth: 3,
        borderTopWidth: 0,
        borderStyle: 'solid',
    },
    image:{
        width: Dimensions.get('window').width, 
        height: 290,
        resizeMode: 'contain'
    },
    details: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 10,
        height: 150,
    },
    detail: {
        fontSize: 20,
        fontStyle: "italic",
        fontFamily: "Times New Roman"
    },
    colBtn:{
        marginRight: 5,
    },
    colors:{
        color: "white",
       padding: 10,
       textAlign: "center",
       fontWeight: "bold"
    }
})

export default DetailsScreen;