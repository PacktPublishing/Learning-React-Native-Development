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