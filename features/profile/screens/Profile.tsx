import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import globalStyle from '../../../assets/styles/globals';
import {NavigationProp} from '@react-navigation/native';

const Profile = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>profile page </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
