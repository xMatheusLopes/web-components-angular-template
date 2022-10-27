import { Injector, NgModule, Type } from '@angular/core';
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
  entryComponents: [UiButtonComponent], // Import all components to bundle
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // To each WebComponent, register calling createWebComponent
    this.createWebComponent(UiButtonComponent, 'ui-button')
  }

  createWebComponent(component: Type<any>, tag: string) {
    const el = createCustomElement(component, { injector: this.injector });
    customElements.define(tag, el);
  }
}
