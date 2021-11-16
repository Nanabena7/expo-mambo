import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './assets/screens/HomeScreen';
import SignupScreen from './assets/screens/SignupScreen';
import LoginScreen from './assets/screens/LoginScreen';
import LandingScreen from './assets/screens/LandingSceen';
import DetailsScreen from './assets/screens/DetailsScreen';
import Checkout from './assets/screens/Checkout';
import CartScreen from './assets/screens/CartScreen';
import COLOURS from './assets/const/colours';
 






const App = () => {

  const Stack= createStackNavigator();

  return ( 

  <NavigationContainer>
    <StatusBar barstyle="dark-content" backgroundColor={COLOURS.violet} />
    <Stack.Navigator screenOptions= {{header: () => null}}>
   
      <Stack.Screen name= "Landing" component={LandingScreen}/>
      <Stack.Screen name= "Home" component={HomeScreen}/>
      <Stack.Screen name= "Signup" component={SignupScreen}/>
      <Stack.Screen name= "Login" component={LoginScreen}/>
      <Stack.Screen name= "Details" component={DetailsScreen}/>
      <Stack.Screen name= "Checkout" component={Checkout}/>
      <Stack.Screen name= "Cart" component={CartScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;