const initialState = {
  email: '',
  password: '',
  user: {},
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    
    case 'LOGIN_SUCCESS':     
      return {...state, user: action.payload, loading: false};

    case 'LOADING':
      return {...state, loading: true};
    
    case 'LOGIN_FAILURE':
      return {...state, error: 'Authentication Failed', loading: false};
    
    default: 
      return state;
  }
}
