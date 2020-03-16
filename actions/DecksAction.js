export const CREATE_DECK = "CREATE_DECK";
export const EDIT_DECK = "EDIT_DECK";
// FUTURE BUILD
// export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";
export const SET_CURRENT_DECK = "SET_CURRENT_DECK";

import { generateID } from '../utils/helpers';
import { AsyncStorage } from 'react-native';



export function createDeck ( deckName ){
  let newID = generateID();
  return {
    type: CREATE_DECK,
    id: generateID(),
    deckName
  }
}

function editDeck (deckId , newDeckName ){
  return {
    type: EDIT_DECK,
    deckId,
    newDeckName
  }
}

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

export function setCurrentDeck (deckId) {
  return {
    type: SET_CURRENT_DECK,
    deckId
  }
}

export function handleCreateDeck ( deckId, deck){
  return (dispatch) => {
    return (
      storeData = async () => {
        try {
          await AsyncStorage.setItem( deckId, deck)
            .then( () => dispatch(createDeck( deckId, deck )) )
        } catch(e){
          console.alert("that didn't go well!")
        }
      }
    )
  }
}
