import { IItem } from '../items/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const items: IItem[] = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is a description'
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is a description'
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'This is a lovely item'
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'This is a lovely item'
  },
  {
    id: 5,
    name: 'Item 5',
    description: 'This is a lovely item'
  },
  {
    id: 6,
    name: 'Item 6',
    description: 'This is a lovely item'
  },
  {
    id: 7,
    name: 'Item 7',
    description: 'This is a lovely item'
  }
];

export class MockItemService {
  getItems (): Observable<IItem[]> {
    return Observable.create(function (observer) {
      return items;
    });
  }

  getItem (id: number): Observable<IItem> {
    return Observable.create(function (observer) {
      return items.find(e => e.id === id);
    });
  }
}
