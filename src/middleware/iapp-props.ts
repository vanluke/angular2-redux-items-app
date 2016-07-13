import { EventEmitter } from 'events';

export abstract class IAppProps {
   events: EventEmitter;
   items: any[];
}
