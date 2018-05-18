import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, editIdea, deleteIdea } from '../actions';
import IdeaPad from './ideapad-form';
import { connect } from 'react-redux';
import _ from 'lodash';

class EditIdea extends Component {
  componentDidMount() {
    const { params } = this.props.navigation.state;
    _.each(params.idea, (value, field) => {
      this.props.ideaInputChange({field, value});
    });
  }

  edit() {
    const { id } = this.props.navigation.state.params.idea;
    const { title, idea } = this.props;
    this.props.editIdea({title, idea, id});
    this.props.navigation.navigate('Ideas');
  }

  delete() {
    const { id } = this.props.navigation.state.params.idea;
    this.props.deleteIdea({id});
    this.props.navigation.navigate('Ideas');
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeaPad {...this.props}/>
        <InnerSection>
          <Button title="Save" onPress={this.edit.bind(this)} backgroundColor={'#3bd3d4'} />   
        </InnerSection> 
        <InnerSection>
          <Button title="Delete" onPress={this.delete.bind(this)} backgroundColor={'#ef2b35'} />   
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

export default connect(mapStateToProps, { ideaInputChange, editIdea, deleteIdea })(EditIdea);

const styles = {
  container: {
    marginTop: 20
  }
}
