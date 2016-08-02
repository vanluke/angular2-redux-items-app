import 'rxjs/Rx';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provide} from '@angular/core';
import { connect } from '../middleware/store/connect';
import { routerProviders } from '../items/routes';
import itemsStore from '../items/store';
import { IAppProps } from '../middleware/iapp-props';
import { AppProps } from '../middleware/app-props';
import { ItemsService } from '../items/services/items-service';
import { MockItemService } from './mock-item-service';
import { LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { addProviders } from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing';

const applicationStore = connect(itemsStore({}));

class MockRouter {
  createUrlTree() {}
  navigateByUrl() {}
  navigate() {}
}
class MockActivatedRoute { }

describe('app component', () => {
  beforeEachProviders(() => [
      routerProviders,
      ROUTER_DIRECTIVES,
      provide(Router, { useClass: MockRouter }),
      provide(ActivatedRoute, { useClass: MockActivatedRoute }),
      provide(LocationStrategy, { useClass: SpyLocation }),
      provide('ItemsStore', { useValue: applicationStore }),
      provide(ItemsService, { useClass: MockItemService }),
      provide(IAppProps, { useClass: AppProps })
  ]);
  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.debugElement.componentInstance.fetchItems();
    });
  })));

  describe('decorateEventEmitter', () => {
    it('should decorate event emitter with add item',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(AppComponent).then((fixture) => {

        fixture.debugElement.componentInstance.decorateEventEmitter();
        expect(fixture
            .debugElement
            .componentInstance
            .appProps
            .events
            ._events
            .addItem)
          .toBeDefined();
      });
    })));

    it('should decorate event emitter with update item',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(AppComponent).then((fixture) => {

        fixture.debugElement.componentInstance.decorateEventEmitter();
        expect(fixture
            .debugElement
            .componentInstance
            .appProps
            .events
            ._events
            .updateItem)
          .toBeDefined();
      });
    })));

    it('should decorate event emitter with delete item',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(AppComponent).then((fixture) => {

        fixture.debugElement.componentInstance.decorateEventEmitter();
        expect(fixture
            .debugElement
            .componentInstance
            .appProps
            .events
            ._events
            .deleteItem)
          .toBeDefined();
      });
    })));

    it('should decorate event emitter with fetch items',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(AppComponent).then((fixture) => {

        fixture.debugElement.componentInstance.decorateEventEmitter();
        expect(fixture
            .debugElement
            .componentInstance
            .appProps
            .events
            ._events
            .fetchItems)
          .toBeDefined();
      });
    })));

    it('should decorate event emitter with fetch item',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(AppComponent).then((fixture) => {

        fixture.debugElement.componentInstance.decorateEventEmitter();
        expect(fixture
            .debugElement
            .componentInstance
            .appProps
            .events
            ._events
            .fetchItem)
          .toBeDefined();
      });
    })));
  });
  it('should connectToStore should connect to store',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      spyOn(fixture
        .debugElement
        .componentInstance.
        itemsStore, 'connect');
      fixture
        .debugElement
        .componentInstance
        .connectToStore(fixture
          .debugElement
          .componentInstance
          .itemsStore,
        fixture
            .debugElement
            .componentInstance
            .state,
        fixture
            .debugElement
            .componentInstance
            .setItem.bind(fixture
                .debugElement
                .componentInstance),
        fixture
            .debugElement
            .componentInstance
            .setItems.bind(fixture
                .debugElement
                .componentInstance)
          );

          expect(fixture
            .debugElement
            .componentInstance.
            itemsStore.connect).toHaveBeenCalled();
    });
  })));
});
