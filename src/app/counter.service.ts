import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private activeToInactiveCounterSource = new BehaviorSubject<number>(0);
  private inactiveToActiveCounterSource = new BehaviorSubject<number>(0);

  activeToInactiveCounter$ = this.activeToInactiveCounterSource.asObservable();
  inactiveToActiveCounter$ = this.inactiveToActiveCounterSource.asObservable();

  incrementActiveToInactive() {
    this.activeToInactiveCounterSource.next(this.activeToInactiveCounterSource.value + 1);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounterSource.next(this.inactiveToActiveCounterSource.value + 1);
  }
  constructor() { }

}
