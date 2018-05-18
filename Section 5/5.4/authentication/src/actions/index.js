export const authInputChange = (obj) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: obj // field: 'email', 'text': 'blah@blah.com
  };
}