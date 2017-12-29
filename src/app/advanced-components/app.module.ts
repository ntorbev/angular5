import { NgModule } from '@angular/core';
import { AnotherComponent, AppComponent } from './advanced-components.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, ChildComponent, AnotherComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
