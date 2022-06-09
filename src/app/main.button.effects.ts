import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {TOGGLE_MAIN_BUTTON, ToggleMainButton, ToggleSuccess} from "./store/actions";
import {map, switchMap} from "rxjs";
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
