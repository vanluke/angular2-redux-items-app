import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'item-element',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>
    <div>
      <label>{{ item.id }}</label>
      <input [(ngModel)]="item.name" type="text" />
    </div>
    <div>
      <textarea [(ngModel)]="item.description"></textarea>
    </div>
  </div>`
})
export class ItemComponent {
  @Input() item: IItem;
}
