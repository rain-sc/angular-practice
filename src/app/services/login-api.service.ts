import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginType, UserInfoType } from '../types/login-type';
import { map } from 'rxjs';
import { ResType } from '../types/response-type';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { addUserInfo } from '../store/actions/user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient,private store :Store<AppState>,private router:Router) { }

  loginAPI(data: LoginType) {
    return this.http.post<ResType<UserInfoType>>('/api/login', data).pipe(
      map((res) => {
        const {token} = res.data
        if (token) {
          localStorage.setItem('ngToken', token)
          this.store.dispatch(addUserInfo({userInfo:res.data}))
          this.router.navigate(['/dashboard'])
        }
        return res
      })
    )
  }
}
