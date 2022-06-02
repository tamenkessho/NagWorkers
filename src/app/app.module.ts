import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {StoreModule} from '@ngrx/store';
import {appReducer} from "./store/app.reducer";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {DishesPageComponent} from "./dishes-page/dishes-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./authorization.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment.prod";

const routes: Routes = [
  {
    path: 'dishes',
    canActivate: [AuthGuard],
    component: DishesPageComponent
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
    DishesPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    })
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
