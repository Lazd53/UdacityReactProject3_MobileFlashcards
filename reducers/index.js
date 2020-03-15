import {combineReducers} from 'redux';
import {Decks} from './Decks';
import {Groups} from './Groups';
import {CurrentSelection} from './CurrentSelection';

export default combineReducers({
  Decks,
  Groups,
  CurrentSelection
})
