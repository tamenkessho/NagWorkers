import { ActionReducerMap } from '@ngrx/store';
import {mainButtonReducer, PageState} from "./main.button.reducer";

export interface AppState { page: PageState }

export const appReducer: ActionReducerMap<AppState> = { page: mainButtonReducer };
