import { Injectable, Component } from '@angular/core';
@Component({
  selector: 'app',
  template: '<h1>{{ title }}</h1>'
})
export class ItemsComponent {
  title: string = 'Welcome Items';
}
