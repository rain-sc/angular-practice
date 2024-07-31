import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addUserInfo } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
  constructor(private router:Router,private store:Store<AppState>){

  }
  logout(){
    localStorage.removeItem('ngToken')
    this.router.navigate(['/login'])
  }
}
