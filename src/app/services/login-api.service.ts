import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginType, ResToken } from '../types/login-type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http :HttpClient, ) { }

  loginAPI(data:LoginType){
    return this.http.post<ResToken>('/api/auth/login',data).pipe(
      map((res)=>{
        if(res.token){
          localStorage.setItem('ngToken',res.token)
        }
        return res
      })
    )
  }
}
