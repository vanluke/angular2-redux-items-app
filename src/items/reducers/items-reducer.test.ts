import { it, describe, expect } from '@angular/core/testing';
import { itemsReducer } from './items-reducer';
import itemReducerTypes from '../items-consts';
import { IItem } from '../item';

describe('list item reducer', () => {
  it('reducer return empty object by default.', () => {
    const reducer = itemsReducer({}, { type: 'type', payload: {} });
    expect(reducer).toEqual({});
  });

  it('reducer return new item for add_item type.', () => {
    const reducer = itemsReducer({ items: [{}] },
      { type: itemReducerTypes.add_item, payload: { id: 4 } });
    expect(reducer).not.toBeNull();
    expect(reducer.items.length).toBeGreaterThan(1);
  });
  //
  it('reducer return new item collection with \
    updated item for update_item type.', () => {
    const item: IItem = {
      id: 1,
      name: 'this is name',
      description: 'this is description'
    };
    const reducer = itemsReducer({ items: [item] },
      {
        type: itemReducerTypes.update_item,
        payload: { id: 1, name: 'new name' } });
    expect(reducer).not.toBeNull();
    expect(reducer.items)
      .toContain(jasmine.objectContaining({ name : 'new name' }));
  });
  //
  it('reducer return new items without \
    deleted one for delete_item type.', () => {
    const item: IItem = {
      id: 1,
      name: 'this is name',
      description: 'this is description'
    };
    const item2: IItem = {
      id: 2,
      name: 'this is name 2',
      description: 'this is description 3'
    };
    const reducer = itemsReducer({ items: [item, item2] },
      { type: itemReducerTypes.delete_item, payload: { id: 2} });
    expect(reducer).not.toBeNull();
    expect(reducer.items.length).toEqual(1);
    expect(reducer.items).not.toContain(jasmine.objectContaining({ id: 2 }));
  });
});
