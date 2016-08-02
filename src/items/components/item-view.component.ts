import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppProps } from '../../middleware/iapp-props';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from './item.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ItemInputComponent } from './item-input.component';
import { IItem } from '../item';

@Component({
  selector: 'item',
  template: require('./item-view.component.html'),
  directives: [ItemComponent, ItemInputComponent]
})
export class ItemViewComponent implements OnInit, OnDestroy {
    constructor (private appProps: IAppProps,
      private route: ActivatedRoute,
      private router: Router) {}

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


    saveItem(item: IItem) {
        this.appProps.events.emit('updateItem', item);
        this.enableEdit();
    }

    removeItem (item: IItem) {
       this.appProps.events.emit('deleteItem', item);
       this.navigate('/items');
    }

    navigate (state: string = '/items') {
      this.router.navigate([state]);
    }

    enableEdit = () => this.isEditMode = !this.isEditMode;
    isEditMode: boolean = false;
    private subscription: Subscription;
}
