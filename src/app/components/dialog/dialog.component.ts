import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from 'src/app/layout/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { GenderPipe } from 'src/app/pipe/gender.pipe';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule,CommonModule,GenderPipe],
  standalone: true,
  providers: []
})
export class DialogComponent implements OnInit {
 
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogType,
  ) {
  }
  genderControl = new FormControl(this.data.studentInfo.gender,[
    Validators.required
  ])
  genderList:number[]=[0,1]
  form: FormGroup = new FormGroup<any>({
    name: new FormControl(this.data.studentInfo.name,[
      Validators.required
    ]),
    gender: this.genderControl,
    area: new FormControl(this.data.studentInfo.area,[
      Validators.required
    ]),
    city: new FormControl(this.data.studentInfo.city,[
      Validators.required
    ]),
    province: new FormControl(this.data.studentInfo.province,[
      Validators.required
    ]),
    hopeSalary: new FormControl(this.data.studentInfo.hope_salary,[
      Validators.required
    ]),
    salary: new FormControl(this.data.studentInfo.salary,[
      Validators.required
    ]),
    group: new FormControl(this.data.studentInfo.group,[
      Validators.required
    ]),
  })
 
ngOnInit() {
}
  onSubmit() {
    console.log("form", this.form);
  }
}