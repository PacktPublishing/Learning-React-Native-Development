import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import IdeaPad from './ideapad-form';
import { connect } from 'react-redux';

class EditIdea extends Component {
  create() {
    const { title, idea } = this.props;
    this.props.createIdea({title, idea});
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeaPad />
        <InnerSection>
          <Button title="Save" onPress={this.create.bind(this)} backgroundColor={'#3bd3d4'} />   
        </InnerSection> 
        <InnerSection>
          <Button title="Delete" onPress={this.create.bind(this)} backgroundColor={'#ef2b35'} />   
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

export default connect(mapStateToProps, { ideaInputChange, createIdea })(EditIdea);

const styles = {
  container: {
    marginTop: 20
  }
}
