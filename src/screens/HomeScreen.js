import React from 'react';
import { View, Text } from 'react-native';
import styles from '../utils/styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
    </View>
  );
}
