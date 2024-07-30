import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginApiService } from '../services/login-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private LoginApiService: LoginApiService, private route: Router) { }
  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('admin', [Validators.required]),
      password: new FormControl('123456', [Validators.required])
    })
  }
  ngOnDestroy() {

  }

  login() {
    if (this.form.valid) {
      this.LoginApiService.loginAPI(this.form.value).subscribe({
        next: (res) => {
          this.route.navigateByUrl('/dashboard')
        }
      })
    }
  }
}
