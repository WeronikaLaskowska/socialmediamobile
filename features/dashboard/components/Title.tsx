import PropTypes from 'prop-types';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './style';

function Title({text}: {text: string}): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={style.title}> {text}</Text>
    </SafeAreaView>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
