import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductListType } from 'src/app/types/product-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProductApiService],
  imports: [MaterialModule],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private productService: ProductApiService) { }

  displayedColumns: string[] = ['id', 'title', 'image', 'price', 'category'];
  dataSource!: MatTableDataSource<ProductListType>;
  pageSizes = [5, 10, 20];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator

  ngOnInit() {
    this.getProductList()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getProductList() {
    this.productService.getProductListAPI().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res)
    })
  }

}
