import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Button title="Login" backgroundColor="red"/>
      </View>
    );
  }
}
