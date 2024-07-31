import { AfterViewInit, Component, OnInit, } from '@angular/core';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ ],
  imports: [ ],
  standalone: true
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private studentService:StudentApiService ) { }
   
  ngOnInit() {
this.getStudentList()
  }
  ngAfterViewInit() {

  }
  getStudentList(){
    this.studentService.getStudentListAPI().subscribe((res)=>
      console.log('res',res)
  )
}
}
