import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import Header from '../components/Header';
import SVG_XMLs from '../svgs/SVGs';
import Input from '../components/Input';
import DropDownComp from '../components/DropDownComp';
import CountryPicker from '../components/CountryPicker';
import DatePickerComp from '../components/DatePickerComp';
import GradientTextButton from '../components/GradientButton';
import Colors from '../theme/Colors';
import GradientOptionSelector from '../components/GradientOptionSelector';

const SignUp = ({navigation}) => {
  const genders = ['Male', 'Female', 'Rather not say'];
  return (
    <BackgroundContainer>
      <Header title={'Sign Up'} startIcon={SVG_XMLs.back} endIconText={'1/4'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={styles.formContainer}>
          <Input label={'Full name'} placeholder={'Type your full name here'} />
          <CountryPicker label={'Contact'} />
          <DatePickerComp label={'Birthday'} placeholder={'DD-MM-YYYY'} />
          <GradientOptionSelector label={'Gender'} options={genders} />
        </View>
        <View style={{gap: 16, marginTop: 28}}>
          <GradientTextButton
            title="Create an Account"
            onPress={() => {
              navigation.navigate('otpScreen');
            }}
            style={{marginHorizontal: 30}}
          />
          <Text style={styles.signIn}>
            Already have an account?{' '}
            <Text onPress={() => {}} style={{color: Colors.primaryColor}}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </BackgroundContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 51,
    gap: 20,
  },
  signIn: {
    color: 'white',
    textAlign: 'center',
  },
});
