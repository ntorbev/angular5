import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-data-binding',
  template: `<input type="text" [value]="customTwoWayBind" (input)="onInput($event)">`
})

export class CustomTwoWayDataBindingComponent {

  @Output() customTwoWayBindChange = new EventEmitter();
  private _customTwoWayBind = 0;


  get customTwoWayBind() {
    return this._customTwoWayBind;
  }

  @Input()
  set customTwoWayBind(val) {
    this._customTwoWayBind = val;
  }

  onInput(ev: any) {
    this.customTwoWayBindChange.emit(ev.target.value);
  }
}
