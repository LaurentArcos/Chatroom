import { ADD_NEW_MESSAGE, SET_NEW_MESSAGE_INPUT_TEXT } from '../actions/actions';

const initialState = {
  messages: [
    { id: 1, author: 'Pacman', text: 'Waka waka waka waka' },
    { id: 2, author: 'Shakira', text: 'Waka waka HE HE' },
    { id: 3, author: 'Koala', text: 'Koala koala' },
    { id: 4, author: 'Admin', text: "Qu'est-ce qui se passe ici" },
  ],

  newMessageInputText: '',
};

function messages(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let maxId = 0;
      state.messages.forEach((message) => {
        if (message.id > maxId) {
          maxId = message.id;
        }
      });
      const newId = maxId + 1;

      return {
        ...state,
        messages: [...state.messages, {
          id: newId,
          author: action.payload.username,
          text: state.newMessageInputText,
        }],
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