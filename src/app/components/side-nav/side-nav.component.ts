import { Component } from '@angular/core';
import { childRoutes } from 'src/app/layout/child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  showMenu = false
  routes = childRoutes
}
