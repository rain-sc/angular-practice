import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginType, UserInfoType } from '../types/login-type';
import { map } from 'rxjs';
import { ResType } from '../types/response-type';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  loginAPI(data: LoginType) {
    return this.http.post<ResType<UserInfoType>>('/api/login', data).pipe(
      map((res) => {
        const {token} = res.data
        if (token) {
          localStorage.setItem('ngToken', token)
        }
        return res
      })
    )
  }
}
