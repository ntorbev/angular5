import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-another',
  template: `
    <div>another</div>
  `
})

export class AnotherComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <input #inp type="text">
    <button (click)="accessByRef(inp)">Show Ref</button>
    <app-child (childEvent)="handleChildEvent()" [text]="someValue">
      <app-another></app-another>
    </app-child>
  `
})
export class AppComponent implements OnInit, AfterContentInit {
  someValue = 'Pass data from parent to child with input binding';

  /**
   *  @ContentChild includes only elements that exists within the ng-content tag
   * @ContentChildren returns a collection (QueryList) of elements
   */
  @ContentChild(AnotherComponent) private ComponentOrLocalVar;

  /**
   * @ViewChild Returns the first found
   * @ViewChildren will return a collection (QueryList) of all the found children
   * could be used with a type of the child component or with a local variable
   */
  @ViewChild(ChildComponent) private childComponent;

  /**
   * ElementRef - provides access to the underlying native element (DOM element)
   * Use with caution! Use the Renderer2 instead */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  /** use ngAfterContentInit hook because onInit, some themes content may not be rendered */
  ngAfterContentInit(): void {
    console.log(this.childComponent);
  }

  ngOnInit() {
    const render = this.renderer,
      h1 = render.createElement('h1');

    render.setProperty(h1, 'innerHTML', 'Added h1 by Renderer2');
    render.appendChild(this.elementRef.nativeElement, h1);
  }

  /**
   * Reference to Angular component
   * But limited because the parent-child wiring must be done entirely within the parent template
   */
  accessByRef(inp: HTMLInputElement) {
    console.log(inp);
  }

  /** Parent binds to child event and reacts to those events */
  handleChildEvent() {
    console.log('as');
  }
}
