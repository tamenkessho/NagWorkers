import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ToggleMainButton} from "../Store/actions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  currentStatus!: Observable<{ mainButtonState: boolean; }>;

  constructor(private store: Store<{ mainPageState: { mainButtonState: boolean } }>) {
  }

  changeStatus() {
    this.store.dispatch(new ToggleMainButton(true))


    this.currentStatus = this.store.select('mainPageState')
    console.log(this.currentStatus)
  }
}
