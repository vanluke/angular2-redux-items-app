import { IAppProps } from './iapp-props.ts';
import { EventEmitter } from 'events';
import { IItem } from '../items/item';

export class AppProps extends IAppProps {
  events: EventEmitter = new EventEmitter();

  items: IItem[] = [];
  selectedItem: IItem;
}
