import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginApiService } from '../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private LoginApiService: LoginApiService) { }
  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('mor_2314',[Validators.required]),
      password: new FormControl('83r5^_',[Validators.required])
    })
  }
  ngOnDestroy() {

  }

  login() {
    if( this.form.valid){
      this.LoginApiService.loginAPI(this.form.value).subscribe()
    }
  }
}
