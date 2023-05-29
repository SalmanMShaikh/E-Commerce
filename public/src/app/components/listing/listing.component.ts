import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from 'src/app/service/delete-product.service';
import { GetProductService } from 'src/app/service/get-product.service';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public productList: any;
  constructor(private getData: GetProductService, private deleteProductService: DeleteProductService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getListingDetails()
  }
  getListingDetails() {
    this.getData.getProduct().subscribe(res => {
      let products: any[] = []
      if (res.status === 200 && res.data) {
        products = res.data
      }

      this.productList = products;
      console.log(res.status, ';<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', products)
    })
  }
  deleteProduct(id: number) {
    this.deleteProductService
      .deleteProduct(id)
      .subscribe();
    this.getListingDetails()

  }

  updateProduct() {
    this.router.navigateByUrl('/update');
  }




}
