import {
  CREATE_DECK,
  EDIT_DECK,
  DELETE_DECK,
  ADD_CARD
} from '../actions/DecksAction';
import { formatDeck } from '../utils/helpers'

export function Decks ( state = [], action){
  switch(action.type){
    case CREATE_DECK :
      let {deckName, id} = action;
      let formattedDeck = formatDeck(id, deckName)
      return state.concat( { [id] : formattedDeck } );
    case EDIT_DECK :
      return {...state};
    case DELETE_DECK :
      return {...state.filter( deck => deck.id !== action.deckId)};
    case ADD_CARD :
      return {...state};
    default:
      return state;
  }
}
