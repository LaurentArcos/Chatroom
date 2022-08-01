import { ADD_NEW_MESSAGE, SET_NEW_MESSAGE_INPUT_TEXT } from '../actions/actions';

const initialState = {
  messages: [
  ],

  newMessageInputText: '',
};

function messages(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      const newMessage = action.payload;
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageInputText: '',
      };
    }

    case SET_NEW_MESSAGE_INPUT_TEXT:
      return {
        ...state,
        newMessageInputText: action.payload.text,
      };

    default:
      return state;
  }
}

export default messages;
