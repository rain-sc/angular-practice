import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListType } from '../types/product-type';
import { Observable } from 'rxjs';

@Injectable()
export class ProductApiService {

  constructor(private http: HttpClient) { }

  prifixedUrl = '/api/products'

  getProductListAPI(): Observable<ProductListType[]> {
    return this.http.get<ProductListType[]>(this.prifixedUrl)
  }

}
