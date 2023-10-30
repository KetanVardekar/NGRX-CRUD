import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { customIncrement, modifiedName } from '../counter/state/counter.actions';
import { getName } from '../counter/state/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  name$!:Observable<string>
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
   this.name$ = this.store.select(getName)
  }
  value!: number;
  name!:string
  Add(): void {
this.store.dispatch(customIncrement({count:this.value}))
    console.log(this.value);
  }

  changeName():void{
    this.store.dispatch(modifiedName())
  }
}
