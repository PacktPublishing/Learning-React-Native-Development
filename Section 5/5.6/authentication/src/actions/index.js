export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value } // field: 'email', 'text': 'blah@blah.com
  };
}