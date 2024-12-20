import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFont,
  verticalScale,
} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImageSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    borderColor: '#EFF2F6',
  },
  profileImageContainer: {
    borderWidth: 2,
    borderColor: '#0150EC',
    padding: horizontalScale(2),
    borderRadius: 999,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 999,
  },
  name: {
    color: '#022150',
    fontSize: 20,
    fontWeight: 700,
    marginTop: verticalScale(10),
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(40),
  },
  counterElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  counterTextHeader: {
    color: '#022150',
    fontSize: 20,
    fontWeight: 700,
  },
  counterText: {
    color: '#79869F',
    fontSize: 16,
    fontWeight: 400,
  },
  profileContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(30),
    flex: 1,
    paddingVertical: 20,
    gap: 10,
    backgroundColor: '#fff',
  },
  profileContentElement: {
    width: 150,
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
});

export default style;
