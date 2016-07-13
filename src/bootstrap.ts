import { AppComponent } from './components/app.component';
import { enableProdMode, provide } from '@angular/core';
import { Http, HTTP_PROVIDERS, ConnectionBackend } from '@angular/http';
import itemsStore from './items/store';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { connect } from './middleware/store/connect';
import { ItemsService } from './items/services/items-service';
//import { ROUTER_BINDINGS } from '@angular/router';
import { routerProviders } from './items/routes';
const applicationStore = connect(itemsStore({}));

bootstrap(AppComponent, [
  routerProviders,
  HTTP_PROVIDERS,
  ConnectionBackend,
  Http,
  ItemsService,
  provide('ItemsStore', { useValue: applicationStore  })
]);
