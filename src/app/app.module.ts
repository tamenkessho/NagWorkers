import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {StoreModule} from '@ngrx/store';
import {appStorage, effects} from "./store/app.storage";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {WorkersPageComponent} from "./workers-page/workers-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./authorization.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment.prod";
import {EffectsModule} from "@ngrx/effects";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'workers',
    canActivate: [AuthGuard],
    component: WorkersPageComponent
  }, {
    path: 'main',
    component: MainPageComponent
  }, {
    path: 'login',
    component: LoginPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    WorkersPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appStorage),
    EffectsModule.forRoot(effects),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    }),
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
