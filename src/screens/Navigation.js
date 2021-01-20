import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import LoginScreen from '../auth/LoginScreen';
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
