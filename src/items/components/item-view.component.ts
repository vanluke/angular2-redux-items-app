import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppProps } from '../../middleware/iapp-props';
import { ActivatedRoute } from '@angular/router';
import { ItemComponent } from './item.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ItemInputComponent } from './item-input.component';

@Component({
  selector: 'item',
  template: require('./item-view.component.html'),
  directives: [ItemComponent, ItemInputComponent]
})
export class ItemViewComponent implements OnInit, OnDestroy {
    constructor (private appProps: IAppProps, private route: ActivatedRoute) {}

    ngOnInit(): Subscription {
        this.subscription = this.route.params.subscribe(params => {
          const itemId = (<any>params).id;
          return this.appProps.events.emit('fetchItem', itemId);
        });
        return this.subscription;
    }

    ngOnDestroy(): Subscription {
      this.subscription.unsubscribe();
      return this.subscription;
    }

    get item () {
      return this.appProps.selectedItem;
    }


    saveItem(item) {
        this.appProps.events.emit('updateItem', item);
        this.enableEdit();
    }

    enableEdit = () => this.isEditMode = !this.isEditMode;
    isEditMode: boolean = false;
    private subscription: Subscription;
}
