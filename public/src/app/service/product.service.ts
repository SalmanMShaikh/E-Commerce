import { Injectable } from '@angular/core';
import { config } from 'config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  createProduct(product: FormData) {
    return this.httpClient.post(`${config.apiUrl}/addProductData`, product);
  }

  getProductById(id: any) {
    return this.httpClient.get(`${config.apiUrl}/getProductDataById/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this.httpClient.post(`${config.apiUrl}/updateProductData/${id}`, product);
  }


}
