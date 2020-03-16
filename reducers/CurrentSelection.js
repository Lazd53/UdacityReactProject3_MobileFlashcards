import {SET_CURRENT_DECK, CREATE_DECK} from '../actions/DecksAction';
import {SET_CURRENT_GROUP} from '../actions/GroupsAction';
import {CLEAR_CURRENT_SELECTION} from '../actions/SharedAction';

const clearedSelection = {
  id: null,
  type: null
}

export function CurrentSelection ( state = clearedSelection, action){
  switch(action.type){
    case SET_CURRENT_DECK:
      return {
        id: action.deckId,
        type: "deck"
      };
    case SET_CURRENT_GROUP:
      return {
        id: action.groupId,
        type: "deck"
      };
    case CREATE_DECK:
      return {
        id: action.id,
        type: "deck"
      }
    default:
      return state;
  }
}
