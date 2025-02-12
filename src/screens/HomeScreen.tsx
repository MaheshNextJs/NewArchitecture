import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import tw from 'twrnc';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const HomeScreen = ({navigation}: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showUsers, setShowUsers] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowHideUsers = () => {
    if (!showUsers) {
      fetchUsers();
    }
    setShowUsers(!showUsers);
  };

  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-center m-5 text-lg font-bold`}>
        This is Home Screen
      </Text>

      <View style={tw`flex-1`}>
        {loading ? (
          <ActivityIndicator size="large" color="grey" style={tw`mt-5`} />
        ) : (
          showUsers && (
            <FlatList
              data={users}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={tw`p-1 bg-gray-100 rounded-lg w-3/4 mx-auto`}>
                  <Text style={tw`text-lg text-center`}>
                    {item.firstName} {item.lastName}
                  </Text>
                </View>
              )}
            />
          )
        )}
      </View>

      <TouchableOpacity
        style={tw`bg-blue-200 w-3/4 justify-center items-center p-3 rounded-2xl mx-auto mb-5`}
        onPress={handleShowHideUsers}>
        <Text style={tw`text-center`}>
          {showUsers ? 'Hide Users' : 'Show Users'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-200 w-3/4 justify-center items-center p-3 rounded-2xl mx-auto mb-5`}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={tw`text-center`}>Go to Profile Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-blue-200 w-3/4 justify-center items-center p-3 rounded-2xl mx-auto mb-5`}
        onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-center`}>Go to Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
