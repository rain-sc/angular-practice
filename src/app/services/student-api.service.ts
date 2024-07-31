import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResType } from '../types/response-type';
import { StudentType } from '../types/student-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http:HttpClient) { }

  getStudentListAPI():Observable<ResType<StudentType>>{
    return this.http.get<ResType<StudentType>>('/api/students')
  }
}
