import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
  constructor(private router:Router){

  }
  logout(){
    localStorage.removeItem('ngToken')
    this.router.navigate(['/login'])
  }
}
