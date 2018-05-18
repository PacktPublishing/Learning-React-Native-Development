import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PhotoSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image 
            style={styles.thumbnail}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CandymyloveYasu.png/440px-CandymyloveYasu.png'}} />
          <View style={styles.userContainer}>
            <Text style={styles.username}>username</Text>
          </View>
        </View>
        <View>
          <Image 
            style={{width: null, height: 300}}
            source={{uri: 'https://assets.hongkiat.com/uploads/yummy-instagram-accounts/2-food-instagram-accounts.jpg'}}/>
        </View>
        <View style={styles.heartContainer}>
          <Ionicons 
            name='ios-heart-outline'
            size={30}
          />
        </View>
        <View style={styles.imageMeta}>
          <Text style={styles.username}>username</Text>
          <Text>caption</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    margin: 10
  },

  thumbnailSection: {
    flexDirection: 'row',
    padding: 5, 
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  userContainer: {
    justifyContent: 'center',
    padding: 5
  },

  imageMeta: {
    flexDirection: 'row'
  },

  username: {
    fontWeight: 'bold',
    paddingRight: 5,
  },

  heartContainer: {
    paddingTop: 10,
    paddingBottom: 10
  }
}