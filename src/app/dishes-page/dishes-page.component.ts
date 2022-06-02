import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dishes-page',
  templateUrl: './dishes-page.component.html',
  styleUrls: ['./dishes-page.component.css']
})
export class DishesPageComponent implements OnInit {
  output: any;

  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    this.client.post("http://localhost:8099/dishes",
      {email: "marketing@poollotto.finance", password: "o2m4utv=9", responseType: 'text'})
      .subscribe(value => this.output = value)
  }

}
