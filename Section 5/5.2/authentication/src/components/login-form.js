import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput placeholder="Email" />
        </InnerSection>
        <InnerSection>
          <FormInput placeholder="Password" secureTextEntry={true}/>  
        </InnerSection>  
        <InnerSection>
          <Button title="Login" backgroundColor={'#3bd3d4'} />   
        </InnerSection> 
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 20
  }
}
