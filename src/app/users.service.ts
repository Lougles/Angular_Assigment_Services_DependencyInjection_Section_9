import { Injectable } from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private activeUsers: string[] = ['Max', 'Anna'];
  private inactiveUsers: string[] = ['Chris', 'Manu'];
  constructor( private counter: CounterService ) {}

  public getActiveUsers () {
    return this.activeUsers;
  }

  public getInactiveUsers () {
    return this.inactiveUsers;
  }

  public onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.incrementActiveToInactive();
  }

  public onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.incrementInactiveToActive();
  }
}
