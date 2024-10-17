import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlowButton} from './GradientOptionSelector';

const AddFriendItemList = ({header}) => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        numColumns={2}
        style={{marginVertical: 10, marginHorizontal: -14}}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <AddFriendItem />}
      />
    </View>
  );
};

const AddFriendItem = () => {
  return (
    <View style={styles.item}>
      <Image source={require('../images/profile.png')} style={styles.image} />
      <Text style={styles.heading}>Marc T</Text>
      <Text style={styles.text}>@Username</Text>
      <GlowButton title={'Add'} />
    </View>
  );
};

export default AddFriendItemList;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: 'rgba(130, 140, 169, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  heading: {
    color: 'white',
    marginVertical: 5,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    marginBottom: 10,
  },
});
