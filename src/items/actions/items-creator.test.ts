import itemsConsts from '../items-consts';
import { it, describe, expect } from '@angular/core/testing';
import { IItem } from '../item' ;
import { IItemReducer } from '../reducers/item-reducers';
import { addItem, updateItem, deleteItem, fetchItems } from './items-creator';

describe('action createors', () => {
  it('add_item', () => {
    const addItemAction =  addItem(
      { _id: 1, id: 1, description: 'text', name: 'name' });
      expect(addItemAction).not.toBeNull();
      expect(addItemAction.payload.id)
      .toEqual(1);
    });

    it('update_item', () => {
      const updateItemAction =  updateItem(
        [{ _id: 1, id: 1, description: 'text', name: 'name' }],
        { _id: 1, id: 1, description: 'text 2', name: 'name 2' });
        expect(updateItemAction).not.toBeNull();
        expect(updateItemAction.payload.name)
        .toEqual('name 2');
        expect(updateItemAction.payload)
        .not.toEqual('name');
      });
      //
      it('delete_item', () => {
        const deleteItemAction =  deleteItem(
          { _id: 1 });
          expect(deleteItemAction).not.toBeNull();
          expect(deleteItemAction.payload)
          .not.toContain(jasmine.objectContaining({ name : 'name' }));
        });

        it('fetch_items', () => {
          const fetchItemsAction =  fetchItems({ items: []});
            expect(fetchItemsAction).not.toBeNull();
          });
        });
