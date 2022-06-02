import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ToggleMainButton} from "../store/actions";
import {AppState} from "../store/app.reducer";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentStatus: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('page').subscribe(store => {
      this.currentStatus = store.buttonState
    });
  }

  changeStatus() {
    this.store.dispatch(new ToggleMainButton(this.currentStatus))
  }
}
