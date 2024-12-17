import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFont,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: scaleFont(24),
    fontFamily: getFontFamily('NotoSerifDisplay', '600'),
  },
  userStoryImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  userStoryImageWrapper: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    width: 60,
    height: 60,
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(4),
  },
  userStoryText: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('NotoSerifDisplay', '400'),
  },
  userPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 'auto',
    marginVertical: verticalScale(10),
    maxWidth: 330,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(30),
  },
  userPostHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  userPostHeaderAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostName: {
    color: '#000000',
    fontSize: scaleFont(16),
    fontFamily: getFontFamily('NotoSerifDisplay', '500'),
  },
  userPostLocation: {
    color: '#79869F',
    fontSize: scaleFont(12),
    fontWeight: 400,
  },
  postIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: verticalScale(15),
    gap: 30,
    marginLeft: horizontalScale(5),
  },
  singleIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  singleIconText: {
    color: '#79869F',
    fontSize: scaleFont(14),
    fontFamily: getFontFamily('NotoSerifDisplay', '500'),
  },
});

export default style;
