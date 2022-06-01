import {Action, createAction, props} from "@ngrx/store";

export const TURN_OFF = "TURN_OFF"
export const TURN_ON = "TURN_ON"

export class StatusOff implements Action{
  constructor(private input: boolean) {}
  readonly type = TURN_OFF;
  payload: boolean = this.input;
}
export class StatusOn implements Action{
  constructor(private input: boolean) {}
  readonly type = TURN_ON;
  payload: boolean = this.input;
}

export const toggleMainButton = createAction(
  '[Main Page] Toggle Main button'
);
