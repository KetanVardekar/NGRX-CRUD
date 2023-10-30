import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter, getName } from '../counter/state/counter.selectors';
import { AppState } from 'src/app/store/app.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit ,OnDestroy{
  counter: any;
  // @Input() counter: number = 0;
  name!:string
  counterSubscription!:Subscription;
  counter$!:Observable<number>
  constructor(private store: Store<AppState>) {}
  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe((data) => {
      this.counter = data
      console.log("Change counter called")
    });
  
    // this.counter$ =  this.store.select('counter')
    this.counter$ =  this.store.select(getCounter)
  }
}
