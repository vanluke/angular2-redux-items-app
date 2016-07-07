import { Input, Component } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'item',
  template: `<div>
    <h3>{{ item.name }}</h3>
    <textarea>{{ item.name }}</textarea>
  </div>>`
})
export class ItemComponent {
  @Input() item: IItem;
}
