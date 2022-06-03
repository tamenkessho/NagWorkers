import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ToggleMainButton} from "../store/actions";
import {AppState} from "../store/app.storage";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentStatus: boolean = true;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('mainPage').subscribe(       //selected slice from store btw attached observable to our data. Should be done only once
      store => {                               //save it to local var
        this.currentStatus = store.buttonState   //declare new value to the program
      });
  }

  changeStatus() {
    this.store.dispatch(new ToggleMainButton(this.currentStatus))
  }
}
