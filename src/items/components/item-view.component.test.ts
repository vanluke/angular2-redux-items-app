import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { provide } from '@angular/core';
import {
  it,
  describe,
  expect,
  beforeEachProviders,
  inject,
  TestComponentBuilder,
  async } from '@angular/core/testing';
import { ItemViewComponent } from './item-view.component';
import { IAppProps } from '../../middleware/iapp-props';
import { AppProps } from '../../middleware/app-props';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../item';
import { routerProviders } from '../../items/routes';

class MockActivatedRoute {
  params: Observable<any> = Observable.of({ id: 1 });
};

class MockRouter {
  createUrlTree() {}
  navigateByUrl() {}
  navigate() {}
}

describe('item view component', () => {
  beforeEachProviders(() => [
      routerProviders,
      provide(Router, { useClass: MockRouter }),
      provide(ActivatedRoute,
        { useClass: MockActivatedRoute }),
      provide(IAppProps, { useClass: AppProps })
  ]);

  it('should build', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemViewComponent).then((fixture) => {
      expect(fixture.debugElement.componentInstance.isEditMode).toBe(false);
    });
  })));

  it('should ngOnInit been called',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemViewComponent).then((fixture) => {
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

  it('should ngOnInit call emit',
    async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ItemViewComponent).then((fixture) => {
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
          .events
          .emit).toHaveBeenCalled();
        });
      })));

      it('save item should emit updateItem event',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {

          spyOn(fixture
              .debugElement
              .componentInstance
              .appProps
              .events,
              'emit');
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };
          fixture.debugElement.componentInstance.saveItem(fakeItem);

          expect(fixture
              .debugElement
              .componentInstance
              .appProps
              .events.emit).toHaveBeenCalled();
        });
      })));

      it('should save item been called with item',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          spyOn(fixture.debugElement.componentInstance, 'saveItem');
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };

          fixture.debugElement.componentInstance.saveItem(fakeItem);

          expect(fixture
              .debugElement
              .componentInstance
              .saveItem).toHaveBeenCalled();

          expect(fixture
                  .debugElement
                  .componentInstance
                  .saveItem).toHaveBeenCalledWith(fakeItem);
        });
      })));

      it('should save item toggle isEditMode',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };

          const isEditChanged = fixture
            .debugElement
            .componentInstance
            .isEditMode;

          fixture.debugElement.componentInstance.saveItem(fakeItem);

          expect(isEditChanged).not.toBe(fixture
            .debugElement
            .componentInstance
            .isEditMode);
        });
      })));

      it('should have item getter defined',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };
          fixture
            .debugElement
              .componentInstance
              .appProps.selectedItem = Object.assign({}, fakeItem);
          expect(fixture.debugElement.componentInstance.item).toBeDefined();
        });
      })));

      it('should have delete button',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          expect(fixture.nativeElement
            .querySelector('.items__item__button--remove'))
            .not.toBe(undefined);
        });
      })));

      it('should remove item emit deleteItem event',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          spyOn(fixture
              .debugElement
              .componentInstance
              .appProps
              .events,
              'emit');
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };

          fixture.debugElement.componentInstance.removeItem (fakeItem);

          expect(fixture
              .debugElement
              .componentInstance
              .appProps
              .events.emit).toHaveBeenCalled();

              expect(fixture
                  .debugElement
                  .componentInstance
                  .appProps
                  .events.emit).toHaveBeenCalledWith('deleteItem', fakeItem);
        });
      })));

      it('should remove item call navigate',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemViewComponent).then((fixture) => {
          spyOn(fixture
              .debugElement
              .componentInstance,
              'navigate');
          const fakeItem: IItem = {
            _id: 123,
            id: 123,
            description: 'abc',
            name: 'pak'
          };

          fixture.debugElement.componentInstance.removeItem (fakeItem);

          expect(fixture
              .debugElement
              .componentInstance
              .navigate).toHaveBeenCalled();

              expect(fixture
                  .debugElement
                  .componentInstance
                  .navigate).toHaveBeenCalledWith('/items');
        });
      })));
});
