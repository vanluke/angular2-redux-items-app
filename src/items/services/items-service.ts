import 'rxjs/add/operator/map';
import { Inject, Injectable } from '@angular/core';
import { IItemReducer } from '../reducers/item-reducers';
import { IItem } from '../item';
import { Observable } from 'rxjs/Observable';
import { config } from '../items.config.ts';
import { Http, Headers, Response, BaseRequestOptions } from '@angular/http';
import itemConsts from '../items-consts';

@Injectable()
export class ItemsService {
  constructor(private http: Http, private baseOptions: BaseRequestOptions) {
   this.http = http;
 }

  getItems (): Observable<IItem[]> {
    const url = config.api;
    return this.http.get(url, this.baseOptions)
        .map(response => response.json())
        .map(this.mapToReducer);
  }

  getItem (id: number): Observable<IItem> {
    const url = `${config.itemApi}/${id}`;
    return this.http.get(url, this.baseOptions)
        .map(response => response.json())
        .map(this.mapSingleItemToReducer);
  }

  updateItem (item: IItem): Observable<IItem> {
    const url = `${config.itemApi}/${item._id}`;
    return this.http.put(url, item, this.baseOptions)
        .map(response => response.json())
        .map(this.mapSingleItemToReducer);
  }

  createItem (item: IItem): Observable<IItem> {
    const url = `${config.itemApi}`;
    return this.http.post(url, item, this.baseOptions)
      .map(response => response.json())
      .map(this.mapSingleItemToReducer);
  }

  deleteItem (item: IItem): Observable<Response> {
    const url = `${config.itemApi}/${item._id}`;
    return this.http.delete(url, this.baseOptions)
      .map(response => response)
      .map(this.mapResponse);
  }

  private mapResponse (response: Response): Response {
    return response;
  }

  private mapToReducer(items: IItem[]): IItem[] {
    return items;
  }

  private mapSingleItemToReducer(item: IItem): IItem {
    return item;
  }
}
