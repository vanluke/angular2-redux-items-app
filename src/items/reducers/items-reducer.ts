import itemListReducerTypes from '../items-consts';
import { IItem } from '../item';

export const itemsReducer: any = (state: any = {}, { type, payload }) => {
  switch (type) {
    case itemListReducerTypes.add_item:
      return [...state, payload];
    case itemListReducerTypes.update_item:
      return state.map(element => {
        return element.id === payload.id
          ? Object.assign({}, element, payload)
          : element;
      });
    case itemListReducerTypes.delete_item:
      return state.filter(element => element.id !== payload.id);
    default: return state;
  }
};
