import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import Input from '../components/Input';
import GradientTextButton from '../components/GradientButton';

const ProfileInfoScreen = () => {
  return (
    <BackgroundContainer>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/profile.png')}
            />
            <Text style={styles.Text}>Upload Photo</Text>
          </View>
          <Input label={'Username'} placeholder={'@Username'} />
          <Input
            label={'About'}
            placeholder={'Add a bio'}
            inputStyle={styles.bio}
            multiLine={true}
          />
        </View>
        <GradientTextButton
          title="Done"
          onPress={() => {}}
          style={{marginHorizontal: 28}}
        />
      </View>
    </BackgroundContainer>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    gap: 20,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  Text: {
    color: 'white',
  },
  bio: {
    height: 100,
    textAlignVertical: 'top',
    multiLine: true,
  },
});
