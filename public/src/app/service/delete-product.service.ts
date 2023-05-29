import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  constructor(private http: HttpClient) { }
  deleteProduct(id: number): Observable<unknown> {
    const url = `${config.apiUrl}/deleteProductData/${id}`;
    return this.http.delete(url);
  }
}
