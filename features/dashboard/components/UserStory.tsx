import style from './style';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export interface UserStoryProps {
  firstName: string;
  id: number;
  profileImage?: string;
  noName?: boolean;
  onPress: () => void;
}

function UserStory({
  firstName,
  id,
  profileImage,
  noName,
  onPress,
}: UserStoryProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} key={id}>
      <View style={style.userStoryImageWrapper}>
        {profileImage ? (
          <Image style={style.userStoryImage} source={{uri: profileImage}} />
        ) : (
          <Image
            style={style.userStoryImage}
            source={require('./../../../assets/images/default_profile.png')}
          />
        )}
      </View>
      {!noName && (
        <View>
          <Text style={style.userStoryText}>{firstName}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  profileImage: PropTypes.string,
};

export default UserStory;
