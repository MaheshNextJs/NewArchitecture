import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{title: 'Contact'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
