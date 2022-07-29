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
export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const openSettings = () => ({
  type: OPEN_SETTINGS,
  payload: {
    openedSettings: true,
    closedSettings: false,
  },
});

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});
