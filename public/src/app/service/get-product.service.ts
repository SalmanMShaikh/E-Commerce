import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>(`${config.apiUrl}/getProductData`).pipe(map((res: any) => {
      return res
    }))
  }
}
