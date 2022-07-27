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

/*
J'ai un tableau d'objets contenant un id chacun
Je souhaite calculer l'id le plus élevé et y ajouter 1

J'assigne une variable à zéro représentant l'id le plus élevé
Je boucle sur chacun des éléments du tableau
  Si l'id de l'élément actuel dans la boucle est supérieur à la variable
    J'assigne cette valeur à la variable
J'ajoute un à la variable et je la renvoie
*/

function reducer(state = initialState, action = {}) {
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
          author: 'Nouvel auteur',
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

export default reducer;