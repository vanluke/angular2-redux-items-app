import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'item-input-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./item-input.component.html')
})
export class ItemInputComponent {
  @Input() item: IItem;
}
