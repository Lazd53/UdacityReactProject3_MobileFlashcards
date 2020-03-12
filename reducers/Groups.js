import {
  CREATE_GROUP,
  EDIT_GROUP,
  DELETE_GROUP,
  ADD_DECK_TO_GROUP,
  REMOVE_DECK_FROM_GROUP
} from '../actions/GroupsAction';


export function Groups( state = [], action){
  switch(action.type){
    case CREATE_GROUP :
      return state.concat(action.group);
    case EDIT_GROUP :
      return state;
    case DELETE_GROUP :
      return {
        ...state.filter( group => group.id !== action.groupId)
      };
    case ADD_DECK_TO_GROUP :
      return state;
    case REMOVE_DECK_FROM_GROUP :
      return state;
    default:
      return state;
  }
}
