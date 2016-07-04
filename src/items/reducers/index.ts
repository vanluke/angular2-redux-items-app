import { combineReducers } from 'redux';
import { itemsReducer } from './items-reducer';
import { selectedItem } from './item-selected-reducer';

export default combineReducers({
  itemsReducer,
  selectedItem
});
