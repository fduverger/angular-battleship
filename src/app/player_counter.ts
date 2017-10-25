import { Action } from '@ngrx/store';

export const PLAYER_JOIN = 'PLAYER_JOIN';
export const PLAYER_LEAVE = 'PLAYER_LEAVE';
export const RESET = 'RESET';

export function playerCountReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case PLAYER_JOIN:
			return state + 1;
		case PLAYER_LEAVE:
			return Math.max(0, (state - 1));
		case RESET:
			return 0;
		default:
			return state;
	}
}