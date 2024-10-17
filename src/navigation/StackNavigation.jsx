import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import Colors from '../theme/Colors';
import SignUp from '../screens/SignUp';
import OtpScreen from '../screens/OtpScreen';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import AddFriendsScreen from '../screens/AddFriendsScreen';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.backgroundColor,
          },
        }}
        initialRouteName="onBoarding">
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="otpScreen" component={OtpScreen} />
        <Stack.Screen name="profileInfo" component={ProfileInfoScreen} />
        <Stack.Screen name="addFriendsScreen" component={AddFriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
