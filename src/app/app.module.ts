import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  declarations: [
    GiftShopComponent,
  ]
})
export class AppModule { }
