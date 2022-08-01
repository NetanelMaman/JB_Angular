import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

public amount = 50;
public currDate = new Date();
public minItems = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
