import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginApiService } from '../services/login-api.service';
import { Router } from '@angular/router';
import { ValidationFormsService } from '../services/validation-forms.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup
  formErrors: any
  formControls!: string[];
  submitted = false
  constructor(
    private LoginApiService: LoginApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private validationFormsService: ValidationFormsService,
    private toastr: ToastrService

  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(
        'rainwong',
        [
          Validators.required,
          Validators.minLength(this.validationFormsService.formRules.usernameMin),
          Validators.pattern(this.validationFormsService.formRules.nonEmpty)
        ]
      ),
      password: new FormControl(
        '123456',
        [
          Validators.required,
          Validators.minLength(this.validationFormsService.formRules.passwordMin),
          Validators.pattern(this.validationFormsService.formRules.passwordPattern)
        ])
    })
    this.formControls = Object.keys(this.loginForm.controls)
  }
  onLoginValidate() {
    this.submitted = true
    return this.loginForm.status === 'VALID';
  }
  ngOnInit() {
  }
  ngOnDestroy() {

  }
  onSubmit() {
    if (this.onLoginValidate()) {
      this.LoginApiService.loginAPI(this.loginForm.value).subscribe({
        next: (res) => {
          this.toastr.success('Login successfully!');

        },
        error: (error) => {
          this.toastr.success('Login failed!');
        }
      })
    }
  }
}
