import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { IAppProps } from '../../middleware/iapp-props';
import { ItemComponent } from './item.component';
import { ItemInputComponent } from './item-input.component';

@Component({
  selector: 'item-list',
  template: require('./item-list.component.html'),
  directives: [ROUTER_DIRECTIVES, ItemInputComponent]
})
export class ItemListComponent implements OnInit {
  constructor(private appProps: IAppProps) {
  }

  ngOnInit() {
    this.appProps.events.emit('fetchItems');
  }

  toggleCreateItem = () => {
    this.toggleTextState();
    return this.isCreateModeEnabled = !this.isCreateModeEnabled;
  }

  toggleTextState() {
    this.toggleText = this.toggleText === 'Create item'
      ? 'Hide'
      : 'Create item';
  }

  saveItem(item: IItem) {
      this.appProps.events.emit('addItem', item);
      this.item = this.cleanItem();
      this.toggleCreateItem();
  }

  cleanItem () {
    return Object.assign({});
  }

  item: IItem = Object.create({});
  toggleText: string = 'Create item';
  isCreateModeEnabled: Boolean = false;
}
