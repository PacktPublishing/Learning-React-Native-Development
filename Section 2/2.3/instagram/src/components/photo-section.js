import React, { Component } from 'react';
import {  View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {
  render() {
    return (
      <View>
        <View>
          <Image 
            style={{width: 50, height: 50}}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CandymyloveYasu.png/440px-CandymyloveYasu.png'}} />
          <Text>username</Text>
        </View>
        <View>
          <Image 
            style={{width: null, height: 300}}
            source={{uri: 'https://assets.hongkiat.com/uploads/yummy-instagram-accounts/2-food-instagram-accounts.jpg'}}/>
        </View>
        <View>
          <Button title="Like" />
        </View>
        <View>
          <Text>username</Text>
          <Text>caption</Text>
        </View>
      </View>
    );
  }
}
