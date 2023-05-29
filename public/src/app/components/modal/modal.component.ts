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
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<', this.isOpen)
    });
  }

  saveProduct() {
    this.productService.createProduct(this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    },
      error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/home']);
  }

  onFileSelected(event) {

    const file: File = event.target.files[0];
    const formData = new FormData();

    if (file) {

      this.fileName = file.name;
      console.log(event.target.files, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', this.product, '<<<<<<', formData)
      if (event.target.files && event.target.files['length'] > 0) {
        for (let index = 0; index < event.target.files['length']; index++) {
          console.log('<<<<<<<<<<<<<<<<<nooooooooooooo', event.target.files[index])
          formData.append('images', event.target.files[index])
        }
      }
      console.log(formData, '<<<<<<<<<<<<<<<<why')



    }
  }

  onSubmit() {
    console.log(this.product);
    this.saveProduct();
  }

}
