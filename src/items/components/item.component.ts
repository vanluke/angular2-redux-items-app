import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'item-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./item.component.html')
})
export class ItemComponent {
  @Input() item: IItem;
}
