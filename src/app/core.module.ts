import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {DishesPageComponent} from "./dishes-page/dishes-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthorizationService} from "./authorization.service";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";

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
    RouterModule.forRoot(routes)
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent],

})
export class CoreModule {
}
