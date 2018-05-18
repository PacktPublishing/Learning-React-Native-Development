import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component {
  state = { photos: [{username: 'dummy'}] };

  componentDidMount() {
    axios.get('http://localhost:3000/photos')
      .then(response => {
        console.log(response.status);
        this.setState({ photos: response.data });
      });
  }

  render() {
    return (
      <View>
        <Text> {this.state.photos[0].username} </Text>
      </View>
    );
  }
}
