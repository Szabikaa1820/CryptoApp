
{
  "name": "cryptoApp",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start"
  },
  "dependencies": {
    "expo": "~50.0.3",
    "expo-blur": "~12.0.1",
    "expo-linear-gradient": "~12.1.2",
    "lucide-react-native": "^0.264.0",
    "react": "18.2.0",
    "react-native": "0.73.6",
    "react-native-svg": "15.1.1"
  },
  "private": true
}





import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CryptoApp 🚀</Text>
      <Text style={styles.subtitle}>Let's build something cool!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});
