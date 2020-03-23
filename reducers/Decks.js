import {
  CREATE_DECK,
  EDIT_DECK,
  DELETE_DECK,
  ADD_CARD,
  SET_DECKS
} from '../actions/DecksAction';

export function Decks ( state = {}, action){
  switch(action.type){
    case SET_DECKS :
      return action.decksObj
    case CREATE_DECK :
      let {deckObj, id} = action;
      return {...state, [id]: deckObj}
    // FUTURE VERSION
    // case EDIT_DECK :
    //   return state;
    // case DELETE_DECK :
    //   return {...state.filter( deck => deck.id !== action.deckId)};
    case ADD_CARD :
     const {deckId, cardObject } = action
      return {...state,
              [deckId]:{
                ...state[deckId],
                cards: state[deckId].cards.concat([cardObject])
              }
            }
    default:
      return state;
  }
}
