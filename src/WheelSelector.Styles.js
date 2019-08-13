import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  itemCurrency: {
    color: 'white',
    fontSize: 49.9,
    ...Platform.select({
      android: {},
      ios: { fontWeight: 'bold' }
    }),
    left: Platform.OS === 'android' ? 150 : 140,
    position: 'absolute',
    top: Platform.OS === 'android' ? 96 : 99,
    zIndex: 999
  },
  itemText: {
    color: 'white',
  },
  itemWrapper: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center'
  }
})
