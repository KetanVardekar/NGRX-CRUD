import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{Store} from '@ngrx/store'
import { decrement, increment, reset } from '../counter/state/counter.actions';
import { CounterState } from '../counter/state/counter.state';
@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
 constructor(private store:Store<{counter:CounterState}>) {}
  ngOnInit(): void {
   
  }
  // @Output() OnIncrement = new EventEmitter();
  // @Output() OnDecrement = new EventEmitter();
  // @Output() OnReset = new EventEmitter();

  // ngrx


  Increment() {
    // this.OnIncrement.emit();
    this.store.dispatch(increment())
}

  Decrement() {
  //  this.OnDecrement.emit();
  this.store.dispatch(decrement())
  }

  Reset() {
    // this.OnReset.emit();
    this.store.dispatch(reset())
  }
}
