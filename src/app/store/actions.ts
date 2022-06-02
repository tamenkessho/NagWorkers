import {Action} from "@ngrx/store";

export const TOGGLE_MAIN_BUTTON = "TOGGLE_MAIN_BUTTON";
export class ToggleMainButton implements Action {
  readonly type = TOGGLE_MAIN_BUTTON;
  constructor(public payload: boolean) {}
}
