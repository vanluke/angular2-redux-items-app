import itemsConsts from '../items-consts';
import { it, describe, expect } from '@angular/core/testing';
import { IItem } from '../item' ;
import { IItemReducer } from '../reducers/item-reducers';
import { addItem, updateItem, deleteItem, fetchItems } from './items-creator';

describe('action createors', () => {
  it('add_item', () => {
    const addItemAction =  addItem(undefined,
      { id: 1, description: 'text', name: 'name' });
      expect(addItemAction).not.toBeNull();
      expect(addItemAction.payload.id)
      .toEqual(1);
    });

    it('update_item', () => {
      const updateItemAction =  updateItem(
        [{ id: 1, description: 'text', name: 'name' }],
        { id: 1, description: 'text 2', name: 'name 2' });
        expect(updateItemAction).not.toBeNull();
        expect(updateItemAction.payload)
        .toContain(jasmine.objectContaining({ name : 'name 2' }));
        expect(updateItemAction.payload)
          .not.toContain(jasmine.objectContaining({ name : 'name' }));
      });

      it('delete_item', () => {
        const deleteItemAction =  deleteItem(
          [{ id: 1, description: 'text', name: 'name' },
          { id: 2, description: 'text 2', name: 'name 2' }],
          { id: 1 });
          expect(deleteItemAction).not.toBeNull();
          expect(deleteItemAction.payload)
            .not.toContain(jasmine.objectContaining({ name : 'name' }));
        });

        it('fetch_items', () => {
          const fetchItemsAction =  fetchItems(
          [{}]);
            expect(fetchItemsAction).not.toBeNull();
            expect(fetchItemsAction.payload.length).toBeGreaterThan(0);
          });
  });
