import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{title: 'Contact'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
