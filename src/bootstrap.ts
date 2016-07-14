import { AppComponent } from './components/app.component';
import { enableProdMode, provide } from '@angular/core';
import { IAppProps } from './middleware/iapp-props';
import { AppProps } from './middleware/app-props';
import { Http, HTTP_PROVIDERS, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import itemsStore from './items/store';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { connect } from './middleware/store/connect';
import { ItemsService } from './items/services/items-service';
import { NgReduxRouter } from 'ng2-redux-router';
import { NgRedux } from 'ng2-redux';
import { routerProviders } from './items/routes';

const applicationStore = connect(itemsStore({}));

bootstrap(AppComponent, [
  routerProviders,
  Http,
  HTTP_PROVIDERS,
  ConnectionBackend,
  BaseRequestOptions,
  ItemsService,
  provide(IAppProps, { useClass: AppProps }),
  provide('ItemsStore', { useValue: applicationStore  })
]).catch((e) => {
  console.error(e);
});
