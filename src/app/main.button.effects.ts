import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TOGGLE_MAIN_BUTTON, ToggleSuccess} from "./store/actions";
import {map} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class MainButtonEffect {

  mainButtonEffect = createEffect(() => this.actions$.pipe(ofType(TOGGLE_MAIN_BUTTON),
    map(() => {
      console.log("Succes mate. Fucking success")
      return new ToggleSuccess()})));

  constructor(private actions$: Actions) {
  }
}
