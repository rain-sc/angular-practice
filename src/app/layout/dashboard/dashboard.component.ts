import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProductApiService]
})
export class DashboardComponent implements OnInit {
  constructor(private productService: ProductApiService) { }

  ngOnInit(): void {
    this.productService.getProductListAPI().subscribe((res) => {
      console.log(res);
    })
  }
}
