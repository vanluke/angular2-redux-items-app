import 'rxjs/Rx';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { ItemsComponent } from './items.component';

describe('items component', () => {
  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemsComponent).then((fixture) => {
      expect(fixture.debugElement.componentInstance.title).not.toBeNull();
    });
  })));

  it('should have title defined',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemsComponent).then((fixture) => {
      expect(fixture
          .debugElement
          .componentInstance
          .title).toBe('Welcome Items');
    });
  })));
});
