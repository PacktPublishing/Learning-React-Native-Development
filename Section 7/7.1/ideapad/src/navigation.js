import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginForm from './components/login-form';
import IdeaList from './components/idea-list';
import IdeaPadForm from './components/ideapad-form';

const AuthStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login'
    }
  }
});

const AppStack = StackNavigator({
  Ideas: {
    screen: IdeaList,
    navigationOptions: {
      headerTitle: 'Your Ideas'
    }
  },
  AddIdeas: {
    screen: IdeaPadForm,
    navigationOptions: {
      headerTitle: 'Add your Ideas'
    }
  }
});

export default SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);
