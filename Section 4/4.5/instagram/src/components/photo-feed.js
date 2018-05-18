import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class PhotoFeed extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  renderPhotos() {
    return this.props.photos.map(_photo => {
      return (
        <PhotoSection key={_photo.id} photo={_photo} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderPhotos()}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, { getPhotos })(PhotoFeed);
