import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  input: {
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: COLORS.light,
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginRight: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
