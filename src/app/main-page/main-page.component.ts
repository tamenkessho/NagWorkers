import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleMainButton} from '../ngrx-storage/reducers/actions';
import {MainPageState} from "../ngrx-storage/reducers/main.button.reducer";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  public currentStatus: boolean = false;
 // public status$: Observable<boolean> = this.store.select(state => state);

  constructor(private store: Store<MainPageState>) {
    // this.store.select(selectButtonFeature).subscribe((value: boolean) => {
    //   this.currentStatus = value;
    //   console.log('REFRESHED VALUE: ' + JSON.stringify(value));
    // })
  }

  ngOnInit(): void {

    // this.store.select(state => state.mainButtonState).subscribe(
    //   next => {
    //     console.log(next)
    //     this.readedStatus = next
    //     //console.log('State has been updated. Reading it.. : ' + next)
    //     // if (next)
    //     //   this.readedStatus = true
    //     // else if (!next)
    //     //   this.readedStatus = false
    //     // console.log("next is " + next)
    //   }
    // )
  }

  changeStatus() {
    {
        this.store.dispatch(toggleMainButton())

      this.store.select('mainButton').subscribe((value: any) => {
        // this.currentStatus = value;
        console.log('REFRESHED VALUE: ' + JSON.stringify(value));
      })
    }

    console.log(this.store);

  }
}
