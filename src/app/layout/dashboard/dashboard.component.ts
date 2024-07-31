import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentType } from 'src/app/types/student-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [],
  imports: [NgxDatatableModule],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private studentService: StudentApiService) { }
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Age' }, { name: 'City' }, { name: 'Province' }, { prop: 'hope_salary' }, { name: 'salary' }, { name: 'group' }];
  studentList!: StudentType
  loadingIndicator = true;
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
}
