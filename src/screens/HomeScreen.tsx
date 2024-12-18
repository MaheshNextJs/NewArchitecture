import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-center mb-5`}>This is Home Screen</Text>

      <TouchableOpacity
        style={tw`bg-blue-200 w-3/4 justify-center items-center p-3 rounded-2xl`}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={tw`text-center`}>Go to Profile Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-200 w-3/4 justify-center items-center p-3 rounded-2xl mt-5`}
        onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-center`}>Go to Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
