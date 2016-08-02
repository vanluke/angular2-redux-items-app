import { combineReducers } from 'redux';
import { itemsReducer } from './items-reducer';
import { selectedItem } from './item-selected-reducer';
import { routerReducer as router } from 'ng2-redux-router';

export default combineReducers({
  router,
  itemsReducer,
  selectedItem
});
