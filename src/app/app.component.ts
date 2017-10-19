import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './app.state';
import { PLAYER_JOIN, PLAYER_LEAVE, RESET } from './player_counter';

interface BattleshipState {
	playerCounter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	playerCount: Observable<number>;
  title: string = 'Battleship';

	constructor(private store: Store<AppState>) {
		this.playerCount = store.select('playerCount');
	}

	playerJoin() {
		this.store.dispatch({type: PLAYER_JOIN })
	}

	playerLeave() {
		this.store.dispatch({type: PLAYER_LEAVE})
	}

	reset() {
		this.store.dispatch({type: RESET})
	}

}
