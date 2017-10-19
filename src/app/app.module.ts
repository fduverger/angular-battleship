import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, Action } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

export function counterReducer(state: number = 0, action: Action) {
	console.log('reducing...')
 return 0
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ playerCounter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
