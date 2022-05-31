import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleProjectAUTH';
  route: string = "";

  constructor(private router: Router) {
  }

  changeRoute(urlArg: string) {
    this.router.navigate([urlArg])
  }
}
