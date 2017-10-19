import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface BattleshipState {
	playerCounter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	counter: Observable<number>;

	constructor(private store: Store<BattleshipState>) {
		this.counter = store.select('playerCounter');
		console.log(this.counter);
	}

  title = 'battleship';
}
