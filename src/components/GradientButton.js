import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientTextButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F93DAB', '#A03FE3', '#29F1E5']} // Replace with your gradient colors
        style={styles.gradient}
        start={{x: -0.1, y: 0}}
        end={{x: 1, y: 4}}
        locations={[0, 0.5, 1]}>
        <Text style={styles.text}>Get Started</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 23.5,
    overflow: 'hidden', // Ensures the border radius is applied
  },
  gradient: {
    width: 283,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Change text color as needed
    fontSize: 16, // Adjust font size
    fontWeight: 'bold', // Adjust font weight
  },
});

export default GradientTextButton;
