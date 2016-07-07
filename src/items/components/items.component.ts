import { Injectable, Inject, Component } from '@angular/core';
import { addItem, updateItem,
  deleteItem, fetchItem } from '../actions/items-creator';

  @Component({
    selector: 'app',
    template: `<h1>{{ title }}</h1>`
  })
  @Injectable()
  export class ItemsComponent {
    constructor (@Inject('ItemsStore') private itemsStore) {
      this.itemsStore = itemsStore;
      this.unsubscribe = this.itemsStore.subscribe(() => {
        const state = this.itemsStore.getState();
        this.items = state.itemsReducer;
      });
    }

    ngOnInit () {
       this.itemsStore.dispatch(fetchItems(this.items));
    }

    private addItem () {
      // this.itemsStore.dispatch(addItem(this.items, { name: 'this is name', id: 1, description: 'abc' }));
    }

    get _items() {
      return this.items;
    }
    unsubscribe: any;
    items: any[] = [];
    title: string = 'Welcome Items';
  }
