import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button #btn (click)="action()">notify parent</button>
    <ng-content></ng-content>
  `
})
export class ChildComponent {
  @Output() childEvent = new EventEmitter<any>();

  private _text;

  /** @Input property setter */
  @Input()
  set text(value) {
    this._text = value || 'default';
  }

  /** Emits events when something happens to notify parent */
  action() {
    this.childEvent.emit('someValue|object');
  }
}
