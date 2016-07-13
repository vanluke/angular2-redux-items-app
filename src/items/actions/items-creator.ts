import itemsConsts from '../items-consts';
import { Observable } from 'rxjs';
import { IItem } from '../item' ;
import { IItemReducer } from '../reducers/item-reducers';
import { ItemsService } from '../services/items-service';
import { ReflectiveInjector } from '@angular/core';

export const addItem = function (payload: any = {}): IItemReducer {
  return {
    type: itemsConsts.add_item,
    payload: payload
  };
};

export const updateItem = function (state = [], payload: any = {})
  : IItemReducer {
    return {
      type: itemsConsts.update_item,
      payload
    };
};

export const deleteItem = function (payload: any = {})
  : IItemReducer {
    return {
      type: itemsConsts.delete_item,
      payload
    };
};

export const fetchItems = function (state: any = {})
  : IItemReducer {
    return {
    type: itemsConsts.fetched_items,
    payload: [...state.items]
  };
};
