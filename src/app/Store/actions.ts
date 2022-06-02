import {Action} from "@ngrx/store";

export const TOGGLE_MAIN_BUTTON = "TOGGLE_MAIN_BUTTON";

export class ToggleMainButton implements Action {
  constructor(public transmittedData: boolean) {
  }
  readonly type = TOGGLE_MAIN_BUTTON;
  payload = this.transmittedData;
}
