import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import QuranApp from './QuranApp';

export default function App() {
  return (
    <View style={styles.container}>
      <QuranApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#632929',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
