import {
  TOGGLE_SETTINGS,
} from 'src/actions/actions';

export const debugMiddleware = (store) => (next) => (action) => {
  // ICI
  console.log('Je passe dans mon debugMiddleware');

  switch (action.type) {
    case TOGGLE_SETTINGS:
      console.log("On a cliqué sur toggle settings");
      next(action);
      break;

    default:
      // Next permet de continuer vers le reducer sur l'action donnée
      next(action);
      break;
  }
};

export const loginMiddleware = (store) => (next) => (action) => {
  
};
