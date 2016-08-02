import { EventEmitter } from 'events';
import { IItem } from '../items/item';

export abstract class IAppProps {
   events: EventEmitter;
   items: IItem[];
   selectedItem: IItem;
}
