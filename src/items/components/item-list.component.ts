import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { IAppProps } from '../../middleware/iapp-props';

@Component({
  selector: 'item-list',
  template: require('./item-list.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class ItemListComponent implements OnInit {
  constructor(private appProps: IAppProps) {
  }

  ngOnInit() {
    this.appProps.events.emit('fetchItems');
  }
}
