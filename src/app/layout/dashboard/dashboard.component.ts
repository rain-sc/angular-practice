import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentType } from 'src/app/types/student-type';
import { IconModule } from '@coreui/icons-angular';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { GenderPipe } from 'src/app/pipe/gender.pipe';
import { FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

export type DialogActionType = 'create' | 'edit' | 'delete' | ''
export interface DialogType {
  actionType: DialogActionType
  studentInfo: StudentType
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [],
  imports: [NgxDatatableModule, IconModule, GenderPipe, FormsModule, ReactiveFormsModule, CommonModule, MaterialModule],
  standalone: true
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentApiService, private dialog: MatDialog, private fb: FormBuilder) { }
  studentList!: StudentType
  dialogTitle: DialogActionType = ''
  loadingIndicator: boolean = false

  ngOnInit() {
    this.getStudentList()
  }
  getStudentList() {
    this.loadingIndicator = true
    this.studentService.getStudentListAPI().subscribe({
      next: (res) => {
        this.studentList = res.data
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loadingIndicator = false
      }
    }
    )
  }
  openDialog(actionType: DialogActionType, rowData?: StudentType) {
    this.dialog.open(DialogComponent, {
      data: {
        actionType: `${this.dialogTitle = actionType}`,
        studentInfo: rowData,
      },
      width: '450px',
    }).afterClosed().subscribe(res => {
      this.getStudentList()
    })
  }
  editDialog(rowData: StudentType, actionType: DialogActionType) {
    this.openDialog(actionType, rowData)

  }
  deteleDialog(rowData: StudentType, actionType: DialogActionType) {
    this.openDialog(actionType, rowData)
  }
  createDialog(actionType: DialogActionType) {
    this.openDialog(actionType)
    console.log("actionType", actionType);

  }
}
