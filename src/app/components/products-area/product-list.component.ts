import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsModule } from './products.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];
  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productsService.getAllProducts();
      // console.log(products);
    } catch (err: any) {
      alert(err.massage);
    }
  }
}
