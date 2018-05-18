import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoSection from './src/components/photo-section';
import Test from './src/components/test';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Photos" />
        <PhotoSection />
        <PhotoSection />
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
