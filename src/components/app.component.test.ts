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
      console.log(fixture.debugElement.componentInstance);
      fixture.debugElement.componentInstance.fetchItems();
    });
  })));
});
