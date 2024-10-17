import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BackgroundContainer from '../components/BackgroundContainer';
import Header from '../components/Header';
import SVG_XMLs from '../svgs/SVGs';
import Input from '../components/Input';
import AddFriendItemList from '../components/AddFriendItemList';
import GradientTextButton from '../components/GradientButton';

const AddFriendsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/radial_gradient_bg.png')}
        style={{flex: 1, padding: 20}}>
        <Header
          title={'Add Friends'}
          startIcon={SVG_XMLs.back}
          endIconText={'2/4'}
        />
        <AddFriendItemList
          header={() => {
            return (
              <View style={{marginBottom: 10, marginHorizontal: 10}}>
                <GradientTextButton
                  title={'Sync Contacts'}
                  style={{marginHorizontal: 16, marginTop: 34}}
                />
                <Text style={styles.Text}>
                  Sync you contacts to see who's on Where2
                </Text>
                <Input
                  startIcon={SVG_XMLs.search}
                  placeholder={'Search Friends'}
                />
              </View>
            );
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AddFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Text: {
    color: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 14,
  },
});
