import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component {
  render() {
    this.state = { photos: ['hello'] };
    axios.get('http://localhost:3000/photos')
      .then(response => {
        console.log(response.status);
        this.setState({ photos: response.data });
        // this.state.photos = response.data
      });

    return (
      <View>
        <Text> {this.state.photos} </Text>
      </View>
    );
  }
}
