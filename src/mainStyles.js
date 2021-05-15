import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: 'wheat',
  },
  btn: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3d00',
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  },
  loading: {
    textAlign: 'center',
    fontSize: 25,
    padding: 30,
  },
});
