import { RouterConfig } from '@angular/router';
import { ItemComponent } from '../components/item.component';
import { ItemsComponent } from '../components/items.component';
import { ItemListComponent } from '../components/item-list.component';
import { ItemViewComponent } from '../components/item-view.component';

export const routes: RouterConfig = [
  { path: '', component: ItemsComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'item/:id', component: ItemViewComponent }
];
