import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import globalStyle from '../../../assets/styles/globals';
import {NavigationProp, useRoute} from '@react-navigation/native';
import {userStories} from '../../dashboard/screens/Home';
import style from './style';
import {ProfileTabsNavigation} from '../../../navigation/MainNavigation';

const Profile = ({navigation}: {navigation: NavigationProp<any>}) => {
  const route = useRoute();
  const userId = (route.params as {userId: string}).userId;
  const userObj = userStories.find(el => el.id === parseInt(userId));
  if (!userObj) {
    return <></>;
  }
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={style.profileImageSectionContainer}>
        <View style={style.profileImageContainer}>
          {userObj.profileImage ? (
            <Image
              style={style.profileImage}
              source={{uri: userObj.profileImage}}
            />
          ) : (
            <Image
              style={style.profileImage}
              source={require('./../../../assets/images/default_profile.png')}
            />
          )}
        </View>

        <View>
          <Text style={style.name}>{userObj.firstName}</Text>
        </View>

        <View style={style.counterContainer}>
          <View style={style.counterElement}>
            <Text style={style.counterTextHeader}>45</Text>
            <Text style={style.counterText}>Following</Text>
          </View>
          <View style={style.counterElement}>
            <Text style={style.counterTextHeader}>30M</Text>
            <Text style={style.counterText}>Followers</Text>
          </View>
          <View style={style.counterElement}>
            <Text style={style.counterTextHeader}>100</Text>
            <Text style={style.counterText}>Posts</Text>
          </View>
        </View>
      </View>
      <View style={globalStyle.backgroundWhite}>
        <ProfileTabsNavigation />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
