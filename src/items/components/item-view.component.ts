import { Component, OnInit } from '@angular/core';
import { IAppProps } from '../../middleware/iapp-props';
import { ActivatedRoute } from '@angular/router';
import { ItemComponent } from './item.component';

@Component({
  selector: 'item',
  template: require('./item-view.component.html'),
  directives: [ItemComponent]
})
export class ItemViewComponent implements OnInit {
    constructor (private appProps: IAppProps, private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
          const itemId = parseInt((<any>params).id, 10);
          this.appProps.events.emit('fetchItem', itemId);
        });
    }

    get item () {
      return this.appProps.selectedItem;
    }

    private subscription: any;
}
