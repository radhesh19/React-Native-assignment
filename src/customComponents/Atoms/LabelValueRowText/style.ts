import { StyleSheet } from 'react-native';

const LabelValueRowTextStyles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  rowLabel: {
    color: '#555',
    fontFamily: 'AvenirNext-Bold',
  },

  rowValue: {
    color: '#111',
    fontFamily: 'AvenirNext-Regular',
  },
});

export default LabelValueRowTextStyles;
