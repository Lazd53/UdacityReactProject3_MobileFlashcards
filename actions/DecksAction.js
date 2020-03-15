export const CREATE_DECK = "CREATE_DECK";
export const EDIT_DECK = "EDIT_DECK";
export const DELETE_DECK = "DELETE_DECK";
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

function deleteDeck (deckId) {
  return {
    type: DELETE_DECK,
    deckId
  }
}

function addCard (deckId, questionObject){
  return {
    type: ADD_CARD,
    deckId,
    questionObject
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
// export function handleCreateDeck ( deckId, deck){
//   return (dispatch) => {
//     let id = generateID();
//     return (
//       let returnObject = { id: deck}
//     )
//   }
// }
