import {Platform } from 'react-native';

export function isIOS (){
  if (Platform.OS === "ios"){
    return true
  }else{
    return false
  }
}

export function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck (deckId, deckName){
  return {
    id: deckId,
    cards: [],
    name: deckName
  }
}

export function formatCard ( question, answer){
  let id = generateID();
  return {
    [id] : {
      id,
      question,
      answer
    }
  }
}

export function filterForCurrentSelection(Items, CurrentSelectionID){
  return Object.values(Items.filter( item => Object.keys(item)[0] === CurrentSelectionID )[0])[0]
}
