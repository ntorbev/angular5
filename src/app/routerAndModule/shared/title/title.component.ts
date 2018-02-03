import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<div [ngStyle]="{'background-color': bckgColor}">{{title}}</div>`,
  styles: [`div {
    width: 100%;
    height: 55px;
    line-height: 55px;
    color: white;
    font-size: 33px;
    text-align: center;
  }`]
})
export class TitleComponent {

  @Input() title;

  @Input() bckgColor;

}
