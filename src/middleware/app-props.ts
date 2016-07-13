import { IAppProps } from './iapp-props.ts';
import { EventEmitter } from 'events';

export class AppProps extends IAppProps {
  events: EventEmitter = new EventEmitter();

  items: any[] = [];
}
