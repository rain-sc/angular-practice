import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductApiService {

  constructor(private http: HttpClient) { }

  prifixedUrl = '/api/products'

  getProductListAPI() {
    return this.http.get(this.prifixedUrl)
  }
}
