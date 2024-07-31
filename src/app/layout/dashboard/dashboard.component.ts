import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentType } from 'src/app/types/student-type';
import { IconModule } from '@coreui/icons-angular';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

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
  providers: [],
  imports: [NgxDatatableModule,IconModule],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private studentService: StudentApiService,private dialog:MatDialog) { }
  studentList!: StudentType
  loadingIndicator = true;
  dialogTitle: DialogTitleType = {
    add: 'Add Product',
    edit: 'Edit Product'
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
  editDialog(row:any){
    console.log("blockAgents",row);
    this.dialog.open(DialogComponent,{
      data:{
        actionType:'edit'
      }
    })
    
  }
  deteleDialog(row:any){
    console.log("blockAgents",row.id);

  }
}
