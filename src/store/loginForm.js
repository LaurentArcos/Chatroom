import { SEND_LOGIN, SET_SETTINGS_LOGIN_FORM, TOGGLE_SETTINGS } from '../actions/actions';

const initialState = {
  show: false,
  email: '',
  password: '',
};

function loginForm(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        show: !state.show,
      };

    case SET_SETTINGS_LOGIN_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case SEND_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };

    default:
      return state;
  }
}

export default loginForm;
