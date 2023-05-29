import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal/modal.service';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isOpen = false;
  fileName = '';
  product = new Product;
  constructor(private modalService: ModalService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.modalService.isOpenSubject.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  saveProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price.toString());

    if (this.product.images) {
      for (let i = 0; i < this.product.images.length; i++) {
        formData.append('images', this.product.images[i])
      }
    }
    this.productService.createProduct(formData).subscribe(data => {
      this.goToProductList();
    },
      error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/home']);
  }

  onFileSelected(event: any) {

    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.product.images = files;
      this.fileName = files[0].name
    }


  }

  onSubmit() {
    this.saveProduct();
  }

}
