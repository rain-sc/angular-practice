import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListType } from '../types/product-type';

@Injectable()
export class ProductApiService {

  constructor(private http: HttpClient) { }

  prifixedUrl = '/api/products'

  getProductListAPI() {
    return this.http.get<ProductListType>(this.prifixedUrl)
  }
}
