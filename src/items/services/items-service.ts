import 'rxjs/add/operator/map';
import { Inject, Injectable } from '@angular/core';
import { IItemReducer } from '../reducers/item-reducers';
import { IItem } from '../item';
import { Observable } from 'rxjs/Observable';
import { config } from '../items.config.ts';
import { Http, Headers, Response } from '@angular/http';
import itemConsts from '../items-consts';

@Injectable()
export class ItemsService {
  constructor(private http: Http) { }

  getItems (): Observable<IItem[]> {
    return this.http.get(config.api)
        .map(response => response.json())
        .map(this.mapToReducer);
  }

  private mapToReducer(items: IItem[]): IItem[] {
    // return {
    //   type: itemConsts.fetch_items,
    //   payload: items
    // };
    return items;
  }
}
