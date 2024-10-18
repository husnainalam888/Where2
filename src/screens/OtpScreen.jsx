import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import OTPTextView from 'react-native-otp-textinput';
import Colors from '../theme/Colors';

const OtpScreen = ({navigation}) => {
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Please enter the verification code here
        </Text>
        <View style={styles.OTPTextView}>
          <OTPTextView
            autoFocus
            tintColor={'white'}
            offTintColor={'rgba(255, 255, 255, 0.1)'}
            textInputStyle={styles.input}
            handleTextChange={text => {
              if (text.length == 4) {
                navigation.navigate('profileInfo');
              }
            }}
          />
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.primaryText}>Resend code</Text>
          <Text style={styles.text}>Receive code via Watsapp</Text>
        </View>
      </View>
    </BackgroundContainer>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 16 : null,
    flex: 1,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
  },
  OTPTextView: {
    marginTop: 20,
    marginHorizontal: -10,
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    marginTop: 16,
  },
  primaryText: {
    color: Colors.primaryColor,
  },
  text: {
    color: 'white',
  },
});
