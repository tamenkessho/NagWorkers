import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.storage";
import {AddWorker, DeleteWorker} from "../store/actions";
import {NagWorker} from "../store/workers.form.reducer";

@Component({
  selector: 'app-dishes-page',
  templateUrl: './workers-page.component.html',
  styleUrls: ['./workers-page.component.css']
})
export class WorkersPageComponent implements OnInit {
  nagWorkers: NagWorker[];
  name: string = "Vladimir Polovchuck";
  department: string = "Softwareentwicklung";
  age: string = "41";
  editingRightNow: boolean = false;
  editingNagger: NagWorker = null;

  constructor(
    private client: HttpClient,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select("workersPage").subscribe(value => {
      this.nagWorkers = value.currentWorkers
    })
  }

  saveData() {
    this.store.dispatch(new AddWorker(new NagWorker(this.name, this.department, Number(this.age))))
    // success
  }

  deleteWorker(nagWorker: NagWorker) {
    this.store.dispatch(new DeleteWorker(nagWorker))
  }

  uploadEditNag(currentlyEditingUser: NagWorker) {
    this.editingRightNow = true;
    this.editingNagger = currentlyEditingUser;
    this.name = currentlyEditingUser.name;
    this.department = currentlyEditingUser.dept;
    this.age = String(currentlyEditingUser.age);
  }

  updateMyUser(name: string, department: string, age: string) {
    this.editingRightNow = false;
    this.deleteWorker(this.editingNagger)
    this.store.dispatch(new AddWorker(new NagWorker(name, department, Number(age))));
  }
}
