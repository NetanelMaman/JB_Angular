import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop.component';
import { RandomSaleComponent } from './components/home-erea/random-sale/random-sale.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  declarations: [

  
    GiftShopComponent,
        RandomSaleComponent
  ]
})
export class AppModule { }
