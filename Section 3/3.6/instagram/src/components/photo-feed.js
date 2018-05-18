import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component {
  state = { photos: [] };

  componentDidMount() {
    axios.get('http://localhost:3000/photos')
      .then(response => {
        this.setState({ photos: response.data });
      });
  }

  getPhotos() {
    return this.state.photos.map(_photo => {
      return (
        <PhotoSection photo={_photo} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.getPhotos()}
      </ScrollView>
    );
  }
}
