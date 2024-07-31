import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { addUserInfo, deleteUserInfo } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {
  constructor(private router:Router,private store:Store<AppState>){
    
  }
  username:string = ''
 
  ngOnInit(){
    this.username = localStorage.getItem('ngUsername')!
  }

  logout(){
    localStorage.removeItem('ngToken')
    localStorage.removeItem('ngUsername')
    this.router.navigate(['/login'])
  }
}
