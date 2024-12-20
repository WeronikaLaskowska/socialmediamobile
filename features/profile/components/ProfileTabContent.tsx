import React from 'react';
import {View} from 'react-native';
import style from '../screens/style';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileTabContent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.profileContentWrapper}>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
        <View style={style.profileContentElement}></View>
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
