import firebase from 'firebase';

export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value } // field: 'email', 'text': 'blah@blah.com
  };
}

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({type: 'LOGIN_SUCCESS', payload: user});
      })
      .catch(function(error) {
        dispatch({type: 'LOGIN_FAILURE'});
      });
  }
}

export const ideaInputChange = ({ field, value }) => {
  return {
    type: 'IDEA_INPUT_CHANGE',
    payload: { field, value }
  };
}

export const createIdea = ({title, idea}) => {
  const { uid } = firebase.auth().currentUser;
  
  return (dispatch) => {
    firebase.database().ref(`/userIdeas/${uid}/ideas`)
      .push({title, idea})
      .then(() => dispatch({type: 'NEW_IDEA'}));
  }
}

export const getIdeas = () => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/userIdeas/${uid}/ideas`)
      .on('value', (snapshot) => {
        dispatch({type: 'GET_IDEAS', payload: snapshot.val()})
      });
  }
}
