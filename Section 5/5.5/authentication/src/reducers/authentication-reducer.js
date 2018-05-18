const initialState = {
  email: '',
  password: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_INPUT_CHANGE':
      // newstate = {email: 'newval', password: 'newval'}
      return { ...state, [action.payload.field]: action.payload.value };
    
    default: 
      return state;
  }
}
