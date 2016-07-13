import { Component } from '@angular/core';
import { IItem } from '../item';
import { Router } from '@angular/router';
import { IAppProps } from '../../middleware/iapp-props';

@Component({
  selector: 'item-list',
  template: `<div>
    <div *ngIf="appProps.items.length > 0">
      <div *ngFor="let im of appProps.items">
        <label>{{ im.name }}</label>
      </div>
    </div>
  </div>`
})
export class ItemListComponent {
  constructor(private appProps: IAppProps) {
    this.appProps.events.emit('fetchItems');
  }
}
