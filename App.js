import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { changeIcon, getIcon } from 'react-native-change-icon';

export default function App() {
  const [icon, setIcon] = useState('Default')

  const updateIcon = async () => {
    if (icon === 'Default') {
      setIcon('Festive')

      try {
        const response = await changeIcon('Festive')

        console.log('response', response);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      setIcon('Default')

      try {
        const response = await changeIcon('Default')
        
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  useEffect(() => {
    async function checkIcon() {
      const currentIcon = await getIcon()

      setIcon(currentIcon)

      console.log('currentIcon', currentIcon);
    }

    checkIcon()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Current icon: {icon}</Text>
      <Pressable onPress={updateIcon} style={{
        padding: 16,
        backgroundColor: '#5CB5F9'
      }}>
        <Text>Change to {icon === 'Default' ? 'festive' : 'default'} icon</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
});
