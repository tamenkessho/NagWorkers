import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {InitWorkers, ToggleMainButton} from "../store/actions";
import {AppState} from "../store/app.storage";
import {HttpClient} from "@angular/common/http";
import {NagWorker} from "../store/workers.form.reducer";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']})
export class MainPageComponent implements OnInit {
  currentStatus: boolean = true;
  state = '1';
  ifFirst: boolean = true;
  ifLast: boolean = false;

  constructor(private store: Store<AppState>,
              private client: HttpClient) {
  }

  ngOnInit(): void {
    this.store.select('mainPage').subscribe(       //selected slice from store btw attached observable to our data. Should be done only once
      store => {                               //save it to local var
        this.currentStatus = store.buttonState   //declare new value to the program
      });


    this.client.get<NagWorker[]>("http://localhost:8099/nag/data?token=armane").subscribe(newData => {
      console.log(newData);
      this.store.dispatch(new InitWorkers(newData))
    })

  }

  changeStatus() {
    this.store.dispatch(new ToggleMainButton(this.currentStatus))
  }

  animateForward() {
    this.ifFirst = false
    if (this.state.includes('1')) {
      this.state = '2'
      this.ifLast = false
    } else {this.state = '3'
      this.ifLast = true}
  }

  animateBack() {
    this.ifLast = false
    if (this.state.includes('3')) {
      this.state = '2'
      this.ifFirst = false
    } else {this.state = '1'
    this.ifFirst = true}
  }
  animateBeginning() {this.state = '1'; this.ifFirst = true; this.ifLast =false}
  animateFinal() {this.state = '3'; this.ifLast = true; this.ifFirst = false}
}
