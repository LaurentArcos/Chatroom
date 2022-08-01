import { SET_NEW_MESSAGE_AUTHOR } from '../actions/actions';

const initialState = {
  isLogged: false,
  username: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NEW_MESSAGE_AUTHOR:
      return {
        ...state,
        isLogged: true,
        username: action.payload.author,
      };

    default:
      return state;
  }
}

export default reducer;
