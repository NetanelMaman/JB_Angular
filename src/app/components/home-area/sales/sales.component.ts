import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

    public weekendSaleItem= 'pizza';
    public totalItemOnSale = 0;
    public dessertsSale = ["Ice-cream", "Eclair", "Pavlova", "Apple pie"];

public isWeekend(): boolean{
    const now = new Date();
    const dayOfWeek = now.getDate() +1;
    return dayOfWeek >=5;
}

  constructor() { }

  ngOnInit(): void {
  }

}
