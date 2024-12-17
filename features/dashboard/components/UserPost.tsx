import style from './style';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';
import UserStory from './UserStory';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {verticalScale} from '../../../assets/styles/scaling';

export interface UserPostProps {
  firstName: string;
  lastName: string;
  location: string;
  id: number;
  profileImage?: string;
  bookmarks: number;
  likes: number;
  comments: number;
}

function UserPost({
  firstName,
  lastName,
  location,
  id,
  profileImage,
  bookmarks,
  likes,
  comments,
}: UserPostProps): React.JSX.Element {
  return (
    <View key={id}>
      <View style={style.userPostContainer}>
        <View style={style.userPostHeader}>
          <TouchableOpacity style={style.userPostHeaderAndName}>
            <UserStory
              noName
              firstName={firstName}
              id={id}
              profileImage={profileImage}
            />
            <View style={{marginLeft: verticalScale(10)}}>
              <Text style={style.userPostName}>
                {firstName} {lastName}
              </Text>
              <Text style={style.userPostLocation}>{location}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon color="#898DAE" icon={faEllipsisVertical} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: verticalScale(15)}}>
          {profileImage ? (
            <Image source={{uri: profileImage}} />
          ) : (
            <Image
              source={require('./../../../assets/images/default_post.png')}
            />
          )}
        </View>

        <View style={style.postIconsContainer}>
          <View style={style.singleIconContainer}>
            <FontAwesomeIcon color="#898DAE" icon={faHeart} />
            <Text style={style.singleIconText}>{likes}</Text>
          </View>
          <View style={style.singleIconContainer}>
            <FontAwesomeIcon color="#898DAE" icon={faComment} />
            <Text style={style.singleIconText}>{comments}</Text>
          </View>
          <View style={style.singleIconContainer}>
            <FontAwesomeIcon color="#898DAE" icon={faBookmark} />
            <Text style={style.singleIconText}>{bookmarks}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  bookmarks: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  profileImage: PropTypes.string,
};

export default UserPost;
