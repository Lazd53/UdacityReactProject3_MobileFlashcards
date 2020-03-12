export const CREATE_DECK = "CREATE_DECK";
export const EDIT_DECK = "EDIT_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const SET_CURRENT_DECK = "SET_CURRENT_DECK";

function createDeck ( deck ){
  return {
    type: CREATE_DECK,
    deck
  }
}

function editDeck (deckId , newDeckName ){
  return {
    type: EDIT_DECK,
    deckId,
    newDeckName
  }
}

function deleteDeck (deckId) {
  return {
    type: DELETE_DECK,
    deckId
  }
}

function addQuestion (deckId, questionObject){
  return {
    type: ADD_QUESTION,
    deckId,
    questionObject
  }
}

function setCurrentDeck (deckId) {
  return {
    type: SET_CURRENT_DECK,
    deckId
  }
}
