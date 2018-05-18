import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import { authInputChange } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  componentDidMount() {
    const config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput placeholder="Email"
            value={this.props.email} 
            onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}/>
        </InnerSection>
        <InnerSection>
          <FormInput placeholder="Password"
            value={this.props.password}
            onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text})}
            secureTextEntry={true}/>  
        </InnerSection>  
        <InnerSection>
          <Button title="Login" onPress={() => console.log(this.props.email)} backgroundColor={'#3bd3d4'} />   
        </InnerSection> 
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email, 
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { authInputChange })(LoginForm);

const styles = {
  container: {
    marginTop: 20
  }
}
