import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  authorizationService: AuthorizationService;
  private auth: AuthorizationService;

  constructor(
    auth: AuthorizationService,
    private router: Router,
    authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService;
    this.auth = auth
  }

  onSubmit(authForm: NgForm) {
    let result = authForm.value;
    console.log(result)
    this.auth.onLogin(result.email, result.password)
      .subscribe(resForm => {
        const token = resForm.token
        console.log(token);

        this.router.navigate(['workers']);
      })
  }
}
