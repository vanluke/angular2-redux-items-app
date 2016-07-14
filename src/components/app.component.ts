import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import rootReducer from '../items/reducers';
import { addItem, updateItem,
  deleteItem, fetchItems, fetchItem } from '../items/actions/items-creator';
import { ItemsService } from '../items/services/items-service';
import { IItem } from '../items/item';
import { IAppProps } from '../middleware/iapp-props';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit, OnDestroy {
    constructor (@Inject('ItemsStore') private itemsStore,
    private itemsService: ItemsService,
    private appProps: IAppProps) {
    }

  ngOnInit() {
    this.unsubscribe = this.connectToStore(this.itemsStore,
      this.state,
      this.setItem.bind(this),
      this.setItems.bind(this));
      this.decorateRouter();

  }

  decorateEventEmitter () {
    this.appProps.events.on('addItem', this.addItem);
    this.appProps.events.on('updateItem', this.updateItem.bind(this));
    this.appProps.events.on('deleteItem', this.deleteItem);
    this.appProps.events.on('fetchItems', this.fetchItems.bind(this));
    this.appProps.events.on('fetchItem', this.fetchItem.bind(this));
  }

  decorateRouter () {
    this.decorateEventEmitter();
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  connectToStore (itemsStore, state, item, items) {
    return itemsStore.connect(() => {
      state = itemsStore.getState();
      item(state.selectedItem);
      items(state.itemsReducer);
    });
  }

  addItem(item: IItem) {

  }

  updateItem(item: IItem) {
    this.itemsStore.dispatch(updateItem(this.state, item));
    this.itemsStore.dispatch(fetchItem(item));
  }

  deleteItem(item: IItem) {

  }

  fetchItems() {
    this.itemsService.getItems().subscribe(items => {
      this.itemsStore.dispatch(fetchItems(items));
    });
  }

  fetchItem (id) {
    this.itemsService.getItem(id).subscribe(item => {
      this.itemsStore.dispatch(fetchItem(item));
    });
  }

  setItems(value: any) {
    const { items } = value;
    this.appProps.items = [...items];
  }

  setItem (value) {
    const { item } = value;
    this.appProps.selectedItem = Object.assign({}, item || {});
  }

  state: any;
  unsubscribe: any;
}
