import { Component, OnInit } from '@angular/core';
import { GetProductService } from 'src/app/service/get-product.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public productList: any;
  constructor(private getData: GetProductService) { }

  ngOnInit(): void {
    this.getData.getProduct().subscribe(res => {
      let products: any[] = []
      if (res.status === 200 && res.data) {
        products = res.data
      }

      this.productList = products;
      console.log(res.status, ';<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', products)
    })
  }

}
