export const CREATE_GROUP = "CREATE_GROUP";
export const EDIT_GROUP = "EDIT_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";
export const ADD_DECK_TO_GROUP = "ADD_DECK_TO_GROUP";
export const REMOVE_DECK_FROM_GROUP = "REMOVE_DECK_FROM_GROUP";
export const SET_CURRENT_GROUP = "SET_CURRENT_GROUP";

function createGroup(group){
  return{
    type: CREATE_GROUP,
    group
  }
}

function editGroup(newGroupName, groupId){
  return {
    type: EDIT_GROUP,
    newGroupName,
    id
  }
}

function deleteGroup(groupId){
  return {
    type: DELETE_GROUP,
    id
  }
}

function addDeckToGroup(deckId, groupId){
  return {
    type: ADD_DECK_TO_GROUP,
    deckId,
    groupId
  }
}

function removeDeckFromGroup (deckId, groupId){
  return {
    type: REMOVE_DECK_FROM_GROUP,
    deckId,
    groupId
  }
}

function setCurrentGroup (groupId){
  return {
    type: SET_CURRENT_GROUP,
    groupId
  }
}
