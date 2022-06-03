import {Action} from "@ngrx/store";
import {NagWorker} from "./workers.form.reducer";

export const TOGGLE_MAIN_BUTTON = "TOGGLE_MAIN_BUTTON";
export class ToggleMainButton implements Action {
  readonly type = TOGGLE_MAIN_BUTTON;
  constructor(public payload: boolean) {}
}

export const ADD_WORKER = "ADD_WORKER";
export class AddWorker implements Action{
  readonly type = ADD_WORKER;
  constructor(public payload: NagWorker) {}
}

export const DELETE_WORKER = "DELETE_WORKER";
export class DeleteWorker implements Action{
  readonly type = DELETE_WORKER;
  constructor(public payload: NagWorker) {}
}

export const UPDATE_WORKER = "UPDATE_WORKER";
export class UpdateWorker implements Action{
  readonly type = UPDATE_WORKER;
  constructor(public payload: NagWorker) {}
}

export type Workers = |AddWorker |DeleteWorker |UpdateWorker
