import {StyleSheet, Dimensions} from 'react-native';

export const restaurantCardStyle = StyleSheet.create({
  container: {
    paddingTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').width * 0.85,
    borderRadius: 10,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  biggerText: {
    fontSize: 25,
  },
  smallerText: {
    fontSize: 15,
  },
});
