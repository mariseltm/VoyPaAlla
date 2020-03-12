import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App() {
  let content = <MainScreen/>;

  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
