import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { changeIcon, getIcon } from 'react-native-change-icon';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    async function checkAndApplyicon() {
      const currentIcons = await getIcon()

      if (currentIcons === 'festive') {
        changeIcon('normal')
      } else {
        changeIcon('festive')
      }
    }

    checkAndApplyicon()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
