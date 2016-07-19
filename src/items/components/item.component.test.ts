import 'rxjs/Rx';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { ItemComponent } from './item.component';

describe('item component', () => {
  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemComponent).then((fixture) => {
      expect(fixture.debugElement.componentInstance.item).not.toBeNull();
      let itemCmp = fixture.componentInstance;
      const element = fixture.nativeElement;
      itemCmp.item = { _id: 1,
        id: 1, name: 'this is my name', description: 'abc' };
      fixture.detectChanges();
      expect(element.querySelector('h5').innerText).toBe('this is my name');
    });
  })));
});
