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
import { IItem } from '../item';

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
  describe('create item (toggleCreateItem)', () => {
    it('should toggle create mode',
      async(inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(ItemListComponent).then((fixture) => {
        const spec = fixture
          .debugElement
          .componentInstance
          .isCreateModeEnabled;
        fixture.debugElement.componentInstance.toggleCreateItem();
        expect(spec).not.toEqual(fixture
          .debugElement
          .componentInstance
          .isCreateModeEnabled);
       });
      })));

      it('should toggleTextState toggleText',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemListComponent).then((fixture) => {
          const spec = fixture
            .debugElement
            .componentInstance
            .toggleText;

          fixture.debugElement.componentInstance.toggleTextState();

          expect(spec).not.toEqual(fixture
            .debugElement
            .componentInstance
            .toggleText);
         });
        })));

      it('should toggle text on create item button',
        async(inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(ItemListComponent).then((fixture) => {
          const spec = fixture
            .debugElement
            .componentInstance
            .toggleText;

          fixture.debugElement.componentInstance.toggleCreateItem();

          expect(spec).not.toEqual(fixture
            .debugElement
            .componentInstance
            .toggleText);
         });
        })));

        it('should item be empty object',
          async(inject([TestComponentBuilder], (tcb) => {
          return tcb.createAsync(ItemListComponent).then((fixture) => {
            expect(fixture
              .debugElement
              .componentInstance
              .item).toEqual({});
           });
          })));

          it('should save item clean item',
            async(inject([TestComponentBuilder], (tcb) => {
            return tcb.createAsync(ItemListComponent).then((fixture) => {
              const item: IItem = {
                _id: 1,
                id: 1,
                name: 'name',
                description: 'this is the name'
              };
               fixture.debugElement.componentInstance.saveItem(item);
               expect(item).not.toBe(fixture
                 .debugElement
                 .componentInstance
                 .item);
             });
            })));

            it('should save item call toggleCreateItem',
              async(inject([TestComponentBuilder], (tcb) => {
              return tcb.createAsync(ItemListComponent).then((fixture) => {

                const item: IItem = {
                  _id: 1,
                  id: 1,
                  name: 'name',
                  description: 'this is the name'
                };
                spyOn(fixture
                    .debugElement
                    .componentInstance,
                    'toggleCreateItem');
                 fixture.debugElement.componentInstance.saveItem(item);
                 expect(fixture
                   .debugElement
                   .componentInstance
                   .toggleCreateItem).toHaveBeenCalled();
               });
              })));

          it('should saveItem emit addItem',
            async(inject([TestComponentBuilder], (tcb) => {
                return tcb.createAsync(ItemListComponent).then((fixture) => {
                  const item: IItem = {
                    _id: 1,
                    id: 1,
                    name: 'name',
                    description: 'this is the name'
                  };
                  spyOn(fixture
                      .debugElement
                      .componentInstance
                      .appProps
                      .events,
                      'emit');

                  fixture.debugElement.componentInstance.saveItem(item);

                  expect(fixture
                      .debugElement
                      .componentInstance
                      .appProps
                      .events
                      .emit).toHaveBeenCalled();

                    expect(fixture
                        .debugElement
                        .componentInstance
                        .appProps
                        .events
                        .emit).toHaveBeenCalledWith('addItem', item);

              });
           })));
  });

});
