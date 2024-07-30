import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from 'src/app/layout/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  providers: [ProductApiService]
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogType,
    private productService: ProductApiService) {
  }
  form: FormGroup = new FormGroup<any>({
    title: new FormControl('')
  })

  onSubmit() {
    console.log("form", this.form);
    fetch('http://ajax-api.itheima.net/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": 100,
    "bookname": "rain",
    "author": "rain",
    "publisher": "rain"
      })
    
    })
  }
}
