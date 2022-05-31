import {NgModule} from '@angular/core';
import {CoreModule} from "./core.module";
import {AppComponent} from "./app.component";
import { StoreModule } from '@ngrx/store';

@NgModule({ imports: [ CoreModule, StoreModule.forRoot({}, {}) ], bootstrap: [AppComponent] })
export class AppModule { }
