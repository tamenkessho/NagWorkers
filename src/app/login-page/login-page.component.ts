import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthorizationService} from "../authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  authorizationService: AuthorizationService;
  private client: HttpClient;
  private auth: AuthorizationService;

  constructor(client: HttpClient,
              auth: AuthorizationService,
              private router: Router,
              authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService;
    this.client = client
    this.auth = auth
  }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm) {
    let result = authForm.value;
    console.log(result)
    this.auth.onLogin(result.email, result.password)
      .subscribe(res => {
        console.log(res);
        const token = res
        console.log(token);
        if (token !== "ojwgi10yt349cm1=0ry9n249vnb94wu04w[nb") {
          this.router.navigate(['dishes']);
        }
      })
  }
}
