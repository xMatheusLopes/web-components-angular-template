import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [UiButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(UiButtonComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('ui-button', el);
  }
}
