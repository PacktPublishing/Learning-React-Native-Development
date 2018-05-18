import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import Header from './header';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';

class IdeaPadForm extends Component {
  login() {
    const { email, password } = this.props;
    this.props.login({email, password});
  }

  showButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator size={'small'}/>
        </View>
      );
    }
    return (
      <Button title="Submit" onPress={this.login.bind(this)} backgroundColor={'#3bd3d4'} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput placeholder="Title"
            value={this.props.title} 
            onChangeText={text => this.props.authInputChange({'field': 'title', 'value': text})}/>
        </InnerSection>
        <InnerSection>
          <FormInput placeholder="Jot down your ideas here ..."
            value={this.props.idea}
            onChangeText={text => this.props.authInputChange({'field': 'idea', 'value': text})}
            multiline={true}
            inputStyle={{height:200}}
            />  
        </InnerSection>
        <InnerSection>
          {this.showButton()}   
        </InnerSection> 
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email, 
    password: state.auth.password,
    loading: state.auth.loading,
    user: state.auth.user,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, { authInputChange, login })(IdeaPadForm);

const styles = {
  container: {
    marginTop: 20
  }
}
