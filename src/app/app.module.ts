import {NgModule} from '@angular/core';
import {CoreModule} from "./core.module";
import {AppComponent} from "./app.component";
import { StoreModule } from '@ngrx/store';
import {mainButtonReducer} from "./Store/main.button.reducer";
import {ToggleMainButton} from "./Store/actions";

@NgModule({ imports: [ CoreModule, StoreModule.forRoot(
 {mainPageState: mainButtonReducer}) ], bootstrap: [AppComponent] })
export class AppModule { }
