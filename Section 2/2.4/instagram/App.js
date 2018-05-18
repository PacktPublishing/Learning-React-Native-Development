import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoSection from './src/components/photo-section';
import Dummy from './src/components/dummy';

export default class App extends React.Component {
  render() {
    // return (
    //   <View>
    //     <Header title="Photos" />
    //     <PhotoSection />
    //   </View>
    // );
    return (
      <Dummy />
    )
  }
}

