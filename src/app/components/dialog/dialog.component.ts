import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from 'src/app/layout/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { GenderPipe } from 'src/app/pipe/gender.pipe';
import { StudentApiService } from 'src/app/services/student-api.service';
import { ToastrService } from 'ngx-toastr';
import { CapitalizePipe } from 'src/app/pipe/capitalize.pipe';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, GenderPipe, CapitalizePipe],
  standalone: true,
  providers: []
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogType,
    private studentService: StudentApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
  }
  genderControl = new FormControl(0, [
    Validators.required
  ])
  genderList: number[] = [0, 1]
  form = this.formBuilder.group({
    id:[0],
    name: ['', [Validators.required]],
    gender: [this.genderControl, Validators.required],
    age: [0, Validators.required],
    area: ['', Validators.required],
    city: ['', Validators.required],
    province: ['', Validators.required],
    hope_salary: [0, Validators.required],
    salary: [0, Validators.required],
    group: [1, Validators.required]

  })
  ngOnInit() {
    if (this.data.actionType === 'edit') {
      this.form.patchValue({
        ...this.data.studentInfo,
        id:this.data.studentInfo.id
      }
      )
    }
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
    this.form.reset()
    this.form.clearValidators()
  }
  editStudent() {
    if (this.onLoginValidate()) {
      this.studentService.updateStudentAPI(this.form.value as any).subscribe({
        next: (res) => {
          this.toastr.success('Update student detail successfully!');
        },
        error: (err) => {
          this.toastr.error('Update student detail failed!');
          console.error(err);
        },
        complete: () => {
          this.resetForm()
          this.closeDialog()
        }
      });
    }
  }
  deleteStudent() {
    if (Object.keys(this.data.studentInfo).length === 0) return
    this.studentService.deleteStudentAPI(this.data.studentInfo).subscribe({
      next: (res) => {
        this.toastr.success('Delete student successfully!');
      },
      error: (err) => {
        this.toastr.error('Delete student failed!');
        console.error(err);
      },
      complete: () => {
        this.resetForm()
        this.closeDialog()
      }
    })
  }
  onSubmit() {
    if (this.data.actionType === 'edit') {
      this.editStudent()
    } else if(this.data.actionType === 'delete') {
      this.deleteStudent()
    }
  }
}