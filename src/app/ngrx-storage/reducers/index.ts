import {ActionReducerMap} from '@ngrx/store';
import * as fromMainButton from './main.button.reducer';

export const storageFeatureKey = 'storage';

export interface State {
  // main_button_state: boolean;
}

// export const reducers: ActionReducerMap<State> = {
//
// };
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export interface AppState {
  mainPageState: fromMainButton.MainPageState;
}

export const reducers: ActionReducerMap<AppState> = {
  mainPageState: fromMainButton.mainButtonReducer,
};
