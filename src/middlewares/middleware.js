/* eslint-disable no-case-declarations */
import axios from 'axios';
import socket from 'src/socket';

import {
  TOGGLE_SETTINGS,
  SEND_LOGIN,
  setNewMessageAuthor,
  SEND_MESSAGE,
} from 'src/actions/actions';

export const debugMiddleware = (store) => (next) => (action) => {
  // ICI
  console.log('Je passe dans mon debugMiddleware');

  switch (action.type) {
    case TOGGLE_SETTINGS:
      console.log('On a cliqué sur toggle settings');
      next(action);
      break;

    default:
      // Next permet de continuer vers le reducer sur l'action donnée
      next(action);
      break;
  }
};

export const messagesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const author = store.getState().auth.username;
      const text = store.getState().messages.newMessageInputText;

      socket.emit('send_message', {
        author,
        text,
      });
    }
      break;

    default:
      next(action);
      break;
  }
};

export const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /*
    case ADD_NEW_MESSAGE: {
      const state = store.getState().messages;
      // const newMessageInputText = state.newMessageInputText;
      const { newMessageInputText } = state;

      socket.emit('send_message', {
        message: newMessageInputText,
      });
      break;
    }
    */

    case SEND_LOGIN:
      const state = store.getState().loginForm;
      const { email, password } = state;

      axios.post(
        'http://localhost:3001/login',
        {
          email,
          password,
        },
      )
        .then((response) => {
          console.log(response.data);

          // Je veux mettre à jour mon auteur
          // J'utilise une fonction qui est dans mes actions
          store.dispatch(setNewMessageAuthor(response.data.pseudo));

          next(action);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      // Next permet de continuer vers le reducer sur l'action donnée
      next(action);
      break;
  }
};
