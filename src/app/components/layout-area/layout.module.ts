import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../home-area/home.module';
import { AboutModule } from '../about-area/about.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, HomeModule, AboutModule, AppRoutingModule],
})
export class LayoutModule {}
