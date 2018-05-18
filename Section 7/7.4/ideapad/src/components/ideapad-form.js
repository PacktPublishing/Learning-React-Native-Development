import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';

class IdeaPadForm extends Component {
  render() {
    return (
      <View>
        <InnerSection>
          <FormInput placeholder="Title"
            value={this.props.title} 
            onChangeText={text => this.props.ideaInputChange({'field': 'title', 'value': text})}/>
        </InnerSection>
        <InnerSection>
          <FormInput placeholder="Jot down your ideas here ..."
            value={this.props.idea}
            onChangeText={text => this.props.ideaInputChange({'field': 'idea', 'value': text})}
            multiline={true}
            inputStyle={{height:200}}
            />  
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

export default connect(mapStateToProps, { ideaInputChange })(IdeaPadForm);

