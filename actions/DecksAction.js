export const CREATE_DECK = "CREATE_DECK";
export const EDIT_DECK = "EDIT_DECK";
// FUTURE BUILD
// export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";
export const SET_CURRENT_DECK = "SET_CURRENT_DECK";
export const SET_DECKS = "SET_DECKS";

export function setDecks ( decksObj ){
  return {
    type: SET_DECKS,
    decksObj
  }
}

export function createDeck ( deckObj, id ){
  return {
    type: CREATE_DECK,
    id,
    deckObj
  }
}

//  FUTURE BUILD
// function editDeck (deckId , newDeckName ){
//   return {
//     type: EDIT_DECK,
//     deckId,
//     newDeckName
//   }
// }

// FUTURE BUILD
// function deleteDeck (deckId) {
//   return {
//     type: DELETE_DECK,
//     deckId
//   }
// }

export function addCard (deckId, cardObject){
  return {
    type: ADD_CARD,
    cardObject,
    deckId
  }
}

export function setCurrentDeck (deck) {
  return {
    type: SET_CURRENT_DECK,
    deckId: deck.id,
    deckName: deck.name
  }
}
