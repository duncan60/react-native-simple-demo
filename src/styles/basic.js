import { StyleSheet } from 'react-native';

// const winSize = Dimensions.get('window');

const basic = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 6,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  app: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 20,
    paddingTop: 6,
    paddingBottom: 6,
  },
  pageWarp: {
    paddingTop: 10,
  },
});

export default basic;
