import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  constructor(private route: Router) {

  }
  onLoggedout() {
    localStorage.removeItem('ngToken');
    this.route.navigate(['/login']);
  }
}
