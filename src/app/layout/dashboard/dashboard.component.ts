import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductListType } from 'src/app/types/product-type';

export interface DialogTitleType {
  add: string,
  edit: string
}
export interface DialogType {
  actionType: keyof DialogTitleType

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProductApiService],
  imports: [MaterialModule],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private productService: ProductApiService, private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'title', 'image', 'price', 'category'];
  dataSource!: MatTableDataSource<ProductListType>;
  pageSizes = [5, 10, 20];
  dialogTitle: DialogTitleType = {
    add: 'Add Product',
    edit: 'Edit Product'
  }
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
  openDialog(actionType: string) {

    this.dialog.open(DialogComponent, {
      data: {
        actionType: this.dialogTitle[actionType as keyof DialogTitleType],
      }
    })
  }
}
