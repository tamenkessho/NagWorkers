import { ActionReducerMap } from '@ngrx/store';
import {mainButtonReducer, MainPageState} from "./main.button.reducer";
import {workersFormReducer, WorkersPageState} from "./workers.form.reducer";

export interface AppState { mainPage: MainPageState, workersPage: WorkersPageState }

export const appStorage: ActionReducerMap<AppState> = //creates a map of all reducers in da application
  {
    mainPage: mainButtonReducer,
    workersPage: workersFormReducer
  };
