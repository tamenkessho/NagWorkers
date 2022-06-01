import {NgModule} from '@angular/core';
import {CoreModule} from "./core.module";
import {AppComponent} from "./app.component";
import { StoreModule } from '@ngrx/store';
import {reducers} from "./ngrx-storage/reducers";

@NgModule({ imports: [ CoreModule, StoreModule.forRoot(reducers) ], bootstrap: [AppComponent] })
export class AppModule { }
