import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe} from 'redux';
import { productsStore } from 'src/app/redux/products-state';

@Component({
  selector: 'app-total-products',
  templateUrl: './total-products.component.html',
  styleUrls: ['./total-products.component.css']
})
export class TotalProductsComponent implements OnInit, OnDestroy {
public count: number;
private unsubscribe: Unsubscribe;


  constructor() { }

  ngOnInit(): void {
this.count= productsStore.getState().products.length;
productsStore.subscribe(()=>{
this.count= productsStore.getState().products.length;
});
  }

  ngOnDestroy(): void{
   this.unsubscribe();

  }


}
