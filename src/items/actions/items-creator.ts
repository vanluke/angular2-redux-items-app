import itemsConsts from '../items-consts';
import { IItem } from '../item' ;
import { IItemReducer } from '../reducers/item-reducers';

export const addItem = function (state = [], payload: any = {}): IItemReducer {
  return {
    type: itemsConsts.add_item,
    payload: payload
  };
};

export const updateItem = function (state = [], payload: any = {})
  : IItemReducer {
    return {
      type: itemsConsts.update_item,
      payload: state.map(e => {
        return e.id === payload.id
          ? Object.assign({}, payload)
          : Object.assign({}, e);
      })
    };
};

export const deleteItem = function (state = [], payload: any = {})
  : IItemReducer {
    return {
      type: itemsConsts.delete_item,
      payload: state.filter(e => {
        return e.id !== payload.id;
      })
    };
};

export const fetchItem = function (state = [], payload: any = {})
  : IItemReducer {
    return {
      type: itemsConsts.fetch_items,
      payload: [...state, payload]
    };
};
