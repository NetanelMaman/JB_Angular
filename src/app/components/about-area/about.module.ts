import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ColorService } from 'src/app/services/colors.service';
import { RandomNumberComponent } from './random-number/random-number.component';



@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent,
    RandomNumberComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    AboutComponent
  ],
  providers: [ColorService]
})
export class AboutModule { }
