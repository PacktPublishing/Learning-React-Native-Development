const initialState = {
  email: '',
  password: '',
  user: {},
  error: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    
    case 'LOGIN_SUCCESS':
      console.log(action.payload);      
      return {...state, user: action.payload};
    
    case 'LOGIN_FAILURE':
      console.log('error!');
      return {...state, error: 'Authentication Failed'};
    
    default: 
      return state;
  }
}
