import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2980b9',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#e6f7ff',
          width: 240,
        },
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#2980b9',
        drawerInactiveTintColor: '#808080',
        drawerItemStyle: {
          marginBottom: 15,
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
