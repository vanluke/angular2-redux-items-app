import itemListReducerTypes from '../items-consts';
import { IItem } from '../item';

export const itemsReducer: any = (state: any = {}, { type, payload }) => {
  const { items } = state;

  switch (type) {
    case itemListReducerTypes.add_item:
      return { items: [...items, payload] };
    case itemListReducerTypes.update_item:
      return { items: [...items, payload] };
    case itemListReducerTypes.delete_item:
      return { items: items
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
