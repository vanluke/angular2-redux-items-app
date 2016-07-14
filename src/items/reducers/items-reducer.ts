import itemListReducerTypes from '../items-consts';
import { IItem } from '../item';

export const itemsReducer: any = (state: any = {}, { type, payload }) => {
  switch (type) {
    case itemListReducerTypes.add_item:
      return { items: [...state.items, payload] };
    case itemListReducerTypes.update_item:
      return { items: state.items.map(element => {
        return element.id === payload.id
          ? Object.assign({}, element, payload)
          : element;
      })
    };
    case itemListReducerTypes.delete_item:
      return { items: state
        .items
        .filter(element => element.id !== payload.id) };
    case itemListReducerTypes.fetch_items:
      return Object.assign({}, state, { items: []
           });
    case itemListReducerTypes.fetched_items:
          return Object.assign({}, state, {
          items: payload
        });
    default: return state;
  }
};
