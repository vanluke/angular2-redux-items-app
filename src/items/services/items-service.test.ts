import 'rxjs/Rx';
import {
  it,
  describe,
   expect,
  beforeEachProviders,
  inject,
  async } from '@angular/core/testing';

  import { IItem } from '../item';
  import { ItemsService } from './items-service';
  import {
    ResponseOptions,
    Response,
    Http,
    BaseRequestOptions,
    RequestMethod
  } from '@angular/http';
import { provide } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import itemsConsts from '../items-consts';

const mockHttpProvider = {
  deps: [ MockBackend, BaseRequestOptions ],
  useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
    return new Http(backend, defaultOptions);
  }
};

describe ('items service', () => {
  beforeEachProviders(() => {
    return [
      ItemsService,
      MockBackend,
      BaseRequestOptions,
      provide(Http, mockHttpProvider)
    ];
  });

  it ('fetch items',
  async(inject([ItemsService, MockBackend], (service, mockBackend) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe('http://localhost:1337/api/v0/items');

      connection.mockRespond(new Response(new ResponseOptions({
        body: {
          items: [{
            id: 1,
            name: 'name',
            description: 'description'
          }]
        }
      })));
    });

    service.getItems().subscribe(items => {
        expect(items).not.toBe(undefined);
        expect(items.items).toContain(jasmine.objectContaining({ id: 1 }));
    });
  })));
});
