import { StyleSheet } from 'react-native';

const ButtonWithIconStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#7b61ff',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AvenirNext-Medium',
  },

  mainView: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});

export default ButtonWithIconStyles;
