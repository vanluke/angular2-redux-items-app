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

  private mapToReducer(items: IItem[]): IItem[] {
    return items;
  }

  private mapSingleItemToReducer(item: IItem): IItem {
    return item;
  }
}
