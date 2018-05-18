import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import {  View, Text, } from 'react-native';

export default class IdeaList extends Component {
  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <ListItem
          title={'Dummy'}
          leftIcon={{name: 'lightbulb-outline'}}
        />
        <ListItem
          title={'Dummy 1'}
          leftIcon={{name: 'lightbulb-outline'}}
        />
        <ListItem
          title={'Dummy 2'}
          leftIcon={{name: 'lightbulb-outline'}}
        />
        <ListItem
          title={'Dummy 3'}
          leftIcon={{name: 'lightbulb-outline'}}
        />
      </List>
    );
  }
}
