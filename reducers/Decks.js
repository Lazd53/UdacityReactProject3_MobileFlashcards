import {
  CREATE_DECK,
  EDIT_DECK,
  DELETE_DECK,
  ADD_CARD
} from '../actions/DecksAction';
import { formatDeck } from '../utils/helpers'

let testData = {
  test1: {
    id: "test1",
    cards: [],
    name: "DeckOne"
  },
  test2: {
    id: "test2",
    cards: [],
    name: "DeckTwo"
  },
  test3: {
    id: "test3",
    cards: [],
    name: "DeckThree"
  },
}

export function Decks ( state = testData, action){
  switch(action.type){
    case CREATE_DECK :
      let {deckName, id} = action;
      let formattedDeck = formatDeck(id, deckName)
      return {...state, [id]: formattedDeck}
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
                cards: []
                // cards: state[deckId].cards.concat(cardObject)
              }
            }
    default:
      return state;
  }
}
