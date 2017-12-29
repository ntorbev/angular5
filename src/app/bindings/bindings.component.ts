import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{interpolation}}</p>
    <input [(ngModel)]="twoWayBinding"/>
    <button [ngStyle]="propertyBinding" (click)="eventBinding()">Click me</button>
    <app-custom-two-way-data-binding [(customTwoWayBind)]="customValue"></app-custom-two-way-data-binding>
  `
})

export class AppComponent {
  interpolation = 'interpolation';
  twoWayBinding = 'property binding';
  propertyBinding = {'width': '150px', 'height': '20px'};
  customValue = 33;

  eventBinding() {
    alert('event binding works');
  }
}
