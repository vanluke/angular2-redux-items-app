import { ItemsComponent } from './items/components/items.component';
import { enableProdMode, provide } from '@angular/core';
import itemsStore from './items/store';
import { bootstrap } from '@angular/platform-browser-dynamic';

bootstrap(ItemsComponent, [
  provide('ItemsStore', { useValue: itemsStore({}) })
]);
