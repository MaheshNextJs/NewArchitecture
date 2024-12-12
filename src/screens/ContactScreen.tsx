import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ContactScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Contact Screen!</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default ContactScreen;
