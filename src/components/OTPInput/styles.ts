import { StyleSheet } from 'react-native';
import { heightPixel, RFValue, widthPixel } from '@/shared/utils/functions';
import { Palette } from '@/shared/theme/palette';

const CODE_INPUT = {
  height: heightPixel(46),
  width: widthPixel(37),
  borderRadius: RFValue(8),
  marginRight: RFValue(2),
  fontSize: RFValue(16),
  borderWidth: RFValue(1),
  borderColor: Palette.grey200,
};

const lightStyles = StyleSheet.create({
  codeInputFieldStyle: {
    ...CODE_INPUT,
    borderColor: Palette.grey200,
    color: Palette.grey500,
    fontSize: RFValue(14),
  },
  codeInputHighlightStyle: {
    borderColor: Palette.grey200,
  },
});

const darkStyles = StyleSheet.create({
  codeInputFieldStyle: {
    ...CODE_INPUT,
    borderColor: Palette.grey200,
    color: Palette.grey200,
  },
  codeInputHighlightStyle: {
    borderColor: Palette.grey200,
    color: Palette.grey200,
  },
});

export { lightStyles, darkStyles };
