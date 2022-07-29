export const SET_NEW_MESSAGE_INPUT_TEXT = 'SET_NEW_MESSAGE_INPUT_TEXT';
export const setNewMessageInputText = (text) => ({
  type: SET_NEW_MESSAGE_INPUT_TEXT,
  payload: {
    text,
    // Correspond à text: text,
  },
});

export const SET_NEW_MESSAGE_AUTHOR = 'SET_NEW_MESSAGE_AUTHOR';
export const setNewMessageAuthor = (author) => ({
  type: SET_NEW_MESSAGE_AUTHOR,
  payload: {
    author,
  },
});

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const SET_NEW_MAIL_LOGIN = 'SET_NEW_MAIL_LOGIN';
export const setNewMailLogin = (email) => ({
  type: SET_NEW_MAIL_LOGIN,
  payload: {
    email,
  },
});

export const SET_NEW_PASSWORD_LOGIN = 'SET_NEW_PASSWORD_LOGIN';
export const setNewPasswordLogin = (password) => ({
  type: SET_NEW_PASSWORD_LOGIN,
  payload: {
    password,
  },
});
