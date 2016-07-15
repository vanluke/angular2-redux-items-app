import { it, describe, expect } from '@angular/core/testing';
import { selectedItem } from './item-selected-reducer';
import selectedItemTypes from '../item-selected-consts';
import { IItem } from '../item';

describe('selectedItem reducer', () => {
  it('return object by default', () => {
    const defaultState = selectedItem(undefined, { type: 'test', payload: {}});
    expect(defaultState).toEqual({});
  });
  it('return state for unknown type', () => {
    const item: IItem = {
      id: 1,
      name: 'name',
      description: 'describe me'
    };
    const unknownState = selectedItem([item],
      { type: 'test', payload: { id: 1 }});
    expect(unknownState).toEqual([item]);
  });
  it('select item', () => {
    const item: IItem = {
      id: 1,
      name: 'name',
      description: 'describe me'
    };
    const defaultState = selectedItem([item],
      { type: selectedItemTypes.select_item, payload: item});
    expect(defaultState.item).toEqual(item);
  });
});
