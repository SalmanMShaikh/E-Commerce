import { Injectable } from '@angular/core';
import { config } from 'config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  createProduct(product: any) {
    return this.httpClient.post(`${config.apiUrl}/addProductData`, product);
  }



  updateEmployee(id: number, product: any) {
    return this.httpClient.put(`${config.apiUrl}/${id}`, product);
  }


}
