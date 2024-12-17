import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  header: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(30),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(13),
    backgroundColor: '#E5EAEE',
    borderRadius: 999,
    position: 'relative',
  },
  messageCounter: {
    backgroundColor: '#F35BAC',
    borderRadius: 999,
    display: 'flex',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -2,
    top: -2,
  },
  messageCounterText: {color: '#fff', fontSize: 10},
  userStoryContainer: {
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(17),
  },
});

export default globalStyle;
