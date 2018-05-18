import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoFeed from './src/components/photo-feed';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Photos" />
        <PhotoFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
