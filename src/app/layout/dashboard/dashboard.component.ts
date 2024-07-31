import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentType } from 'src/app/types/student-type';
import { IconModule } from '@coreui/icons-angular';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { GenderPipe } from 'src/app/pipe/gender.pipe';

export interface DialogTitleType {
  add: string,
  edit: string,
  delete:string
}
export interface DialogType {
  actionType:''| keyof DialogTitleType
  studentInfo:  StudentType
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [],
  imports: [NgxDatatableModule,IconModule,GenderPipe],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private studentService: StudentApiService,private dialog:MatDialog) { }
  studentList!: StudentType
  dialogTitle: DialogTitleType = {
    add: 'Add',
    edit: 'Edit',
    delete:'Delete'
  }
  ngOnInit() {
    this.getStudentList()
  }
  ngAfterViewInit() {

  }
  getStudentList() {
    this.studentService.getStudentListAPI().subscribe(
      (next) => {
        this.studentList = next.data
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('completed');
      }
    )
  }
  openDialog(actionType: keyof DialogTitleType,rowData:StudentType) {
    this.dialog.open(DialogComponent,{
      data:{
        actionType:`${this.dialogTitle[actionType]} Student [${rowData.name}]`,
        studentInfo:rowData,
      },
      width:'450px',
    }).afterClosed().subscribe(res=>{
      this.getStudentList()
    })
    }
  editDialog(rowData:StudentType,actionType: keyof DialogTitleType){
    this.openDialog(actionType,rowData)

  }
  deteleDialog(row:StudentType,actionType: keyof DialogTitleType){
    console.log("blockAgents",row.id);
  }
}
