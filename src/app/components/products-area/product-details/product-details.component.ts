import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';
// import { ProductsModule } from '../products.module';
import { ProductModel } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    public product: ProductModel;
    public imageSource: string;
  constructor(private activatedRoute: ActivatedRoute , private productsService : ProductsService) {}

  async ngOnInit() {
    try{
    const id = +this.activatedRoute.snapshot.params['productsId'];
    this.product = await this.productsService.getOneProduct(id);
    this.imageSource = environment.productsUrl + 'images/' + this.product.imageName;
    // console.log(id);
    // console.log(typeof id);
    }
    catch (err: any){
        alert(err.massage);
    }
  }
}
