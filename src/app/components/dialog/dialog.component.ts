import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from 'src/app/layout/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { GenderPipe } from 'src/app/pipe/gender.pipe';
import { StudentApiService } from 'src/app/services/student-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, GenderPipe],
  standalone: true,
  providers: []
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogType,
    private studentService: StudentApiService,
    private toastr: ToastrService
  ) {
  }
  genderControl = new FormControl(this.data.studentInfo.gender, [
    Validators.required
  ])
  genderList: number[] = [0, 1]
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(this.data.studentInfo.id),
    name: new FormControl(this.data.studentInfo.name, [
      Validators.required
    ]),
    gender: this.genderControl,
    age: new FormControl(this.data.studentInfo.age, [
      Validators.required
    ]),
    area: new FormControl(this.data.studentInfo.area, [
      Validators.required
    ]),
    city: new FormControl(this.data.studentInfo.city, [
      Validators.required
    ]),
    province: new FormControl(this.data.studentInfo.province, [
      Validators.required
    ]),
    hope_salary: new FormControl(this.data.studentInfo.hope_salary, [
      Validators.required
    ]),
    salary: new FormControl(this.data.studentInfo.salary, [
      Validators.required
    ]),
    group: new FormControl(this.data.studentInfo.group, [
      Validators.required
    ]),
  })
  ngOnInit() {
  
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onLoginValidate() {
    return this.form.status === 'VALID';
  }
  resetForm() {
    this.data.actionType = ''
    this.data.studentInfo = {
      age: 0,
      area: '',
      city: '',
      createdAt: '',
      gender: 0,
      group: 0,
      hope_salary: 0,
      id: 0,
      name: '',
      province: '',
      salary: 0,
      updatedAt: '',
      user_id: 0,
    }
    this.form.reset('')
    this.form.clearValidators()
  }
  onSubmit() {
    if (this.onLoginValidate()) {
      this.studentService.updateStudentAPI(this.form.value).subscribe({
        next: (res) => {
          this.toastr.success('Update student detail successfully!');
        },
        error: (err) => {
          this.toastr.error('Update student detail failed!');
        },
        complete: () => {
          this.resetForm()
          this.closeDialog()
        }
      });
    }
  }
}