import React from 'react';
import {View, Text, Button} from 'react-native';
import tw from 'twrnc';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={tw`justify-center`}>
      <Text style={tw`bg-red-200 p-3 rounded-md mb-5 text-center`}>
        This is the Home Screen!
      </Text>
      <Button
        title="Go to Contact Screen"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};

export default HomeScreen;
