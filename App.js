import { StyleSheet, Text, View } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import Navigation from './src';

export default function App() {
  enableFreeze(true);
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
