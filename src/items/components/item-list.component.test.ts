import 'rxjs/Rx';
import { provide } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { ItemListComponent } from './item-list.component';
import { IAppProps } from '../../middleware/iapp-props';
import { AppProps } from '../../middleware/app-props';

describe('items component', () => {
  beforeEachProviders(() => [
      ROUTER_DIRECTIVES,
      provide(IAppProps, { useClass: AppProps })
  ]);

  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemListComponent).then((fixture) => {
      expect(fixture.debugElement.componentInstance).toBeDefined();
    });
  })));

  it('should ngOnInit been called',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemListComponent).then((fixture) => {
      spyOn(fixture
          .debugElement
          .componentInstance,
          'ngOnInit');

      fixture.debugElement.componentInstance.ngOnInit();

      expect(fixture
          .debugElement
          .componentInstance
          .ngOnInit).toHaveBeenCalled();
    });
  })));

  it('should have emit fetchItem event',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemListComponent).then((fixture) => {
      spyOn(fixture
          .debugElement
          .componentInstance
          .appProps
          .events,
          'emit');

      fixture.debugElement.componentInstance.ngOnInit();

      expect(fixture
          .debugElement
          .componentInstance
          .appProps
          .events.emit).toHaveBeenCalled();
    });
  })));
});
