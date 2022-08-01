export const SET_NEW_MESSAGE_INPUT_TEXT = 'SET_NEW_MESSAGE_INPUT_TEXT';
export const setNewMessageInputText = (text) => ({
  type: SET_NEW_MESSAGE_INPUT_TEXT,
  payload: {
    text,
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
export const addNewMessage = (username) => ({
  type: ADD_NEW_MESSAGE,
  payload: {
    username,
  },
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

export const SET_SETTINGS_LOGIN_FORM = 'SET_SETTINGS_LOGIN_FORM';
export const setSettingsLoginForm = (field, value) => ({
  type: SET_SETTINGS_LOGIN_FORM,
  payload: {
    field,
    value,
  },
});

export const SEND_LOGIN = 'SEND_LOGIN';
export const sendLogin = () => ({
  type: SEND_LOGIN,
});
