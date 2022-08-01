import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  public time: string;
  private timerId: number;

  // Object has been created
  constructor() {}

  // Component ready for use
  ngOnInit(): void {
    const now = new Date();
    this.time = now.toLocaleTimeString();
    this.timerId = window.setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }

  // Component got new data from outside
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  // Change Detection mechanism kicks in
  ngDoCheck(): void {}

  //Component is about to be destroy
  ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }
}
