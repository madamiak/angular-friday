import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AsyncVsFakeAsyncModule} from './async-vs-fake-async/async-vs-fake-async.module';

@NgModule({
  declarations: [
    AppComponent,
    AsyncVsFakeAsyncModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
