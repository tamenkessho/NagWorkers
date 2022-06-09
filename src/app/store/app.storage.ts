import { ActionReducerMap } from '@ngrx/store';
import {mainButtonReducer, MainPageState} from "./main.button.reducer";
import {workersFormReducer, WorkersPageState} from "./workers.form.reducer";
import {MainButtonEffect} from "../main.button.effects";

export interface AppState { mainPage: MainPageState, workersPage: WorkersPageState}

export const appStorage: ActionReducerMap<AppState> = //creates a map of all reducers in da application
  {
    mainPage: mainButtonReducer,
    workersPage: workersFormReducer
  };
export const effects: any[] = [MainButtonEffect]
