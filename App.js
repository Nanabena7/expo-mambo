import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const stack= createStackNavigator();
import HomeScreen from './assets/view/screens/HomeScreen';
import SignupScreen from './assets/view/screens/SignupScreen';
import LoginScreen from './assets/view/screens/LoginScreen';
import LandingScreen from './assets/view/screens/LandingSceen';
import DetailsScreen from './assets/view/screens/DetailsScreen';
import Checkout from './assets/view/screens/Checkout';
import CartScreen from './assets/view/screens/CartScreen';
import COLOURS from './assets/const/colours';
 






const App = () => {
  return ( <NavigationContainer>
    <StatusBar barstyle="dark-content" backgroundColor={COLOURS.violet} />
    <stack.navigator screenOptions= {{header: () => null}}>
      <stack.screen name= "Home" component={HomeScreen}/>
      <stack.screen name= "Signup" component={SignupScreen}/>
      <stack.screen name= "Login" component={LoginScreen}/>
      <stack.screen name= "Landing" component={LandingScreen}/>
      <stack.scrren name= "Details" component={DetailsScreen}/>
      <stack.screen name= "Checkout" component={Checkout}/>
      <stack.screen name= "Cart" component={CartScreen}/>
    </stack.navigator>
  </NavigationContainer>
  );
};

export default App;