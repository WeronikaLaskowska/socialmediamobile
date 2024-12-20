import {StyleSheet} from 'react-native';
import {getFontFamily} from '../assets/fonts/helper';
import {horizontalScale} from '../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
  },
});

export default style;
