import {animate, state, style, transition, trigger } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "./authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mainPageAnimate', [
      state('bright', style({
        'background-color': '#f8f8f8',
        'color': '#000000'
      })),
      state('dark', style({
        'background-color': '#130808',
        'color': '#bb7e26'
      })),
      transition('bright <=> dark', animate(1500))
    ])]
})
export class AppComponent implements OnInit{
  title = 'ExampleProjectAUTH';
  route: string = "";
  state = "bright";

  constructor(private router: Router,
              private auth: AuthorizationService) {
  }

  changeRoute(urlArg: string) {
    this.router.navigate([urlArg])
  }

  ngOnInit(){
    let email = localStorage.getItem("email")
    let passwort = localStorage.getItem("passwort")

    if (email !== null && passwort !== null
    ) {
      this.auth.onLogin(email, passwort)
        .subscribe(resForm => {
          const token = resForm.token
          console.log(token);

          this.router.navigate(['main']);
        })
    }
  }

  lightMode() {
    console.log("something is going on")
    if(this.state == "bright"){
      this.state = "dark"
    }else if(this.state == "dark"){
      this.state = "bright"
    }
  }
}
