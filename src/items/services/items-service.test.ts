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
            _id: 1,
            id: 1,
            name: 'name',
            description: 'description'
          }]
        }
      })));
    });

    service.getItems().subscribe(items => {
        expect(items).not.toBe(undefined);
        expect(items.items).toContain(jasmine.objectContaining({ _id: 1 }));
    });
  })));

  it ('fetch single item',
  async(inject([ItemsService, MockBackend], (service, mockBackend) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url)
      .toBe('http://localhost:1337/api/v0/item/1');

      connection.mockRespond(new Response(new ResponseOptions({
        body: {
          item: {
            _id: 1,
            id: 1,
            name: 'name',
            description: 'description'
          }
        }
      })));
    });

    service.getItem(1).subscribe(items => {
        expect(items).not.toBe(undefined);
        expect(items.item._id).toEqual(1);
    });
  })));

  it ('update single item',
  async(inject([ItemsService, MockBackend], (service, mockBackend) => {
    const item: IItem = {
      _id: 1,
      id: 1,
      name: 'name',
      description: 'description'
    };
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      expect(connection.request.url)
      .toBe('http://localhost:1337/api/v0/item/1');

      connection.mockRespond(new Response(new ResponseOptions({
        body: {
          item
        }
      })));
    });

    service.updateItem(item).subscribe(items => {
        expect(items).not.toBe(undefined);
        expect(items.item._id).toEqual(1);
    });
  })));

  it ('create single item',
  async(inject([ItemsService, MockBackend], (service, mockBackend) => {
    const item: IItem = {
      _id: 1,
      id: 1,
      name: 'name',
      description: 'description'
    };
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      expect(connection.request.url)
      .toBe('http://localhost:1337/api/v0/item');

      connection.mockRespond(new Response(new ResponseOptions({
        body: {
          item
        }
      })));
    });

    service.createItem(item).subscribe(items => {
        expect(items).not.toBe(undefined);
        expect(items.item._id).toEqual(1);
    });
  })));

  it ('delete item',
  async(inject([ItemsService, MockBackend], (service, mockBackend) => {
    const item: IItem = {
      _id: 1,
      id: 1,
      name: 'name',
      description: 'description'
    };
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      expect(connection.request.url)
      .toBe('http://localhost:1337/api/v0/item/1');

      connection.mockRespond(new Response(new ResponseOptions({
        status: 204
      })));
    });

    service.deleteItem(item).subscribe(res => {
        expect(res.status).toBe(204);
    });
  })));
});
