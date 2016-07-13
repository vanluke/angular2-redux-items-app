import { Injectable, Inject, Component,
  ChangeDetectionStrategy } from '@angular/core';
import { addItem, updateItem,
  deleteItem, fetchItems } from '../actions/items-creator';
import { ItemsService } from '../services/items-service';
import { IItem } from '../item';
import { ItemComponent } from './item.component';
  @Component({
    selector: 'app',
    directives: [ItemComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1>{{ title }}</h1>`
  })
  @Injectable()
  export class ItemsComponent {
    constructor (@Inject('ItemsStore') private itemsStore,
    private itemsService: ItemsService) {
    }

    connectToStore (itemsStore, state, items) {
      return itemsStore.connect(() => {
        state = itemsStore.getState();
        items(state.itemsReducer);
      });
    }

    ngOnInit () {
       this.unsubscribe = this.connectToStore(this.itemsStore,
         this.state,
         this.setItems.bind(this));
       this.itemsStore.dispatch(fetchItems());
    }

    private addItem () {
    // this.itemsStore.dispatch(addItem({ name: 'this is name', id: new Date().valueOf(), description: 'abc' }));
    }

    private removeItem () {
      //this.itemsStore.dispatch(deleteItem({ name: 'this is name', id: 1, description: 'abc' }));
    }

    private updateItem () {
      // this.itemsStore.dispatch(updateItem(this.items,
      //   { name: 'this is name is changed',
      //   id: 1, description: 'abc changed' }));
    }

    public get items() {
      return this._items;
    }

    setItems(value: any) {
      const { items } = value;
      this._items = [...items];
    }

    state: any;
    unsubscribe: any;
    _items: IItem[] = [];
    title: string = 'Welcome Items';
  }
