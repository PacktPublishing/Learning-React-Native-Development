import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Dummy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, width: 100, height: 100, backgroundColor: 'red'}}/>
        <View style={{flex: 2, width: 100, height: 100, backgroundColor: 'blue'}} />
        <View style={{flex: 3, width: 100, height: 100, backgroundColor: 'green'}}/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start', // aligning in x-axis
    justifyContent: 'center', // aligning in y-axis
    flexDirection: 'row',
  },
};