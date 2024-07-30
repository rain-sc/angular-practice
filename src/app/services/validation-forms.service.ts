import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationFormsService {
  errorMessages: any;
  formRules = {
    nonEmpty: '^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$',
    usernameMin: 5,
    passwordMin: 5,
    passwordPattern: `^[A-Za-z0-9]{5,}$`
  };
  formErrors = {
    username: '',
    password: '',
  };
  constructor() {
    this.errorMessages = {
      username: {
        required: 'Username is required',
        minLength: `Username must be ${this.formRules.usernameMin} characters or more`,
        pattern: 'Must contain letters and/or numbers, no trailing spaces'
      },
      password: {
        required: 'Password is required',
        pattern: 'Password must contain: numbers, uppercase and lowercase letters',
        minLength: `Password must be at least ${this.formRules.passwordMin} characters`
      },
    };
  }
}
