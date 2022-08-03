import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { EditProductComponent } from './components/products-area/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list.component';
import { SellersComponent } from './components/sellers-area/sellers.component';

const routes: Routes = [
{path: "Home", component: HomeComponent},
{path: "Products", component: ProductListComponent},
{path: "Products/details/:productsId", component: ProductDetailsComponent},
{path: "Products/edit/:productsId", component: EditProductComponent},
{path: "Products/new", component: AddProductComponent},
{path: "Gift-shop", component: GiftShopComponent},
{path: "Sellers", component: SellersComponent},
{path: "About", component: AboutComponent},
{path: "Contact-us", component: ContactUsComponent},
{path: "" , redirectTo: "/Home", pathMatch: "full"},
{path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
