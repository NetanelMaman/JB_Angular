import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home-area/home.module';
import { AboutModule } from '../about-area/about.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeModule, AboutModule],
})
export class LayoutModule {}
