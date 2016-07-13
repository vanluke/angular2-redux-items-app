import { Injectable, Inject, Component,
  ChangeDetectionStrategy } from '@angular/core';
import { addItem, updateItem,
  deleteItem, fetchItems } from '../actions/items-creator';
import { ItemsService } from '../services/items-service';
import { IItem } from '../item';
import { ItemComponent } from './item.component';
  @Component({
    selector: 'items',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h1>{{ title }}</h1>`
  })
  @Injectable()
  export class ItemsComponent {
    title: string = 'Welcome Items';
  }
