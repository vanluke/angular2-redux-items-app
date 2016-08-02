import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: require('./loading-bar.html')
})
export class LoadingBar {
  @Input() isBussy: boolean = true;
}
