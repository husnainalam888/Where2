import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import Colors from './src/theme/Colors';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
