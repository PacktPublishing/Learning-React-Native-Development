import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import IdeaPad from './ideapad-form';
import { connect } from 'react-redux';

class AddIdea extends Component {
  create() {
    const { title, idea } = this.props;
    this.props.createIdea({title, idea});
    this.props.navigation.navigate('Ideas');
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeaPad />
        <InnerSection>
          <Button title="Submit" onPress={this.create.bind(this)} backgroundColor={'#3bd3d4'} />   
        </InnerSection> 
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.ideaPadForm.title, 
    idea: state.ideaPadForm.idea
  }
};

export default connect(mapStateToProps, { ideaInputChange, createIdea })(AddIdea);

const styles = {
  container: {
    marginTop: 20
  }
}
