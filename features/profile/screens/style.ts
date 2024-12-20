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
});

export default style;
