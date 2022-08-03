import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public product: ProductModel;

  public productForm: FormGroup;
  public nameControl: FormControl;
  public priceControl: FormControl;
  public stockControl: FormControl;
  public imageControl: FormControl;

  @ViewChild('imageControl')
  public imageWrapper: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params['productsId'];
      this.product = await this.productsService.getOneProduct(id);

      this.nameControl = new FormControl(this.product.name);
      this.priceControl = new FormControl(this.product.price);
      this.stockControl = new FormControl(this.product.stock);
      this.imageControl = new FormControl();
      this.productForm = new FormGroup({
        nameControl: this.nameControl,
        priceControl: this.priceControl,
        stockControl: this.stockControl,
        imageControl: this.imageControl,
      });
    } catch (err: any) {
      alert(err.message);
    }
  }

  public async send() {
    try {
      this.product.name = this.nameControl.value;
      this.product.price = this.priceControl.value;
      this.product.stock = this.stockControl.value;
      this.product.image = this.imageWrapper.nativeElement.files[0];

      await this.productsService.updateProduct(this.product);
      alert('Product ahs been update!');
      this.router.navigate(['/Products']);
    } catch (err: any) {
      alert(err.message);
    }
  }
}
