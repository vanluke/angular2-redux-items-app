import 'rxjs/Rx';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { ItemInputComponent } from './item-input.component';

describe('item input component', () => {
  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemInputComponent).then((fixture) => {
      let itemCmp = fixture.componentInstance;
      itemCmp.item = Object.assign({},
        { _id: 1, id: 1, name: 'this is my name', description: 'abc' });
      fixture.detectChanges();
      expect(fixture.debugElement.componentInstance.item).not.toBeNull();
      expect(fixture.nativeElement.querySelector('textarea').value)
        .toBe('abc');
    });
  })));
});
