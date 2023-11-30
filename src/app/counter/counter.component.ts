import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from "../counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;
  private subscription1: Subscription | undefined;
  private subscription2: Subscription | undefined;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.subscription1 = this.counterService.activeToInactiveCounter$.subscribe((value: number):void => {
      this.activeToInactiveCounter = value;
    })
    this.subscription2 = this.counterService.inactiveToActiveCounter$.subscribe((value: number):void => {
      this.inactiveToActiveCounter = value;
    })
  }
}
