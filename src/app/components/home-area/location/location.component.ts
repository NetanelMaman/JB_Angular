import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  @ViewChild('location')
  public selectWrapper: ElementRef<HTMLSelectElement>;

  public show(location: HTMLSelectElement): void {
    alert('location: ' + location.value);
    const select = this.selectWrapper.nativeElement;
    alert("location: " + location.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
