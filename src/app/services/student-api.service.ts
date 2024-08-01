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

  updateStudentAPI(data:StudentType):Observable<ResType<StudentType>>{
    return this.http.put<ResType<StudentType>>(`/api/students/${data.id}`,data)
  }

  deleteStudentAPI(data:StudentType){
  return this.http.delete(`/api/students/${data.id}`)
  }
}
