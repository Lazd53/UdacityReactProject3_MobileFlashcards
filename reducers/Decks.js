import {
  CREATE_DECK,
  EDIT_DECK,
  DELETE_DECK,
  ADD_QUESTION
} from '../actions/DecksAction';

export function Decks ( state = [], action){
  switch(action.type){
    case CREATE_DECK :
      return state.concat(action.deck);
    case EDIT_DECK :
      return {...state};
    case DELETE_DECK :
      return {...state.filter( deck => deck.id !== action.deckId)};
    case ADD_QUESTION :
      return {...state};
    default:
      return state;
  }
}
