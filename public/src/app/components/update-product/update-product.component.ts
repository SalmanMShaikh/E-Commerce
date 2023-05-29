import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  product: Product = new Product();
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.id = 20

    this.productService.getProductById(this.id).subscribe((res: { data: any, status: number }) => {
      if (res && res.data) {
        res.data.images = '';
        this.product = res.data
      }

    }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct()
  }


  updateProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());

    if (this.product.images) {
      for (let i = 0; i < this.product.images.length; i++) {
        formData.append('images', this.product.images[i])
      }
    }
    this.productService.updateProduct(this.id, formData).subscribe(data => {
      this.goToListing();
    }
      , error => console.log(error));
  }

  goToListing() {
    this.router.navigate(['/home']);
  }
  onFileSelected(event: any) {

    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.product.images = files;
    }


  }
}
