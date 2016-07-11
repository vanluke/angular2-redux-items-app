import { ItemsComponent } from './items/components/items.component';
import { enableProdMode, provide } from '@angular/core';
import { Http, HTTP_PROVIDERS, ConnectionBackend } from '@angular/http';
import itemsStore from './items/store';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { connect } from './middleware/store/connect';
import { ItemsService } from './items/services/items-service';

const applicationStore = connect(itemsStore({}));

bootstrap(ItemsComponent, [
  HTTP_PROVIDERS,
  ConnectionBackend,
  Http,
  ItemsService,
  provide('ItemsStore', { useValue: applicationStore  })
]);
