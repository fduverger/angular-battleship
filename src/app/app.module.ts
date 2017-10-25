import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, Action } from '@ngrx/store';
import { NgModule } from '@angular/core';

// import { playerCountReducer } from './player_counter';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.provideStore({ playerCount: playerCountReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
