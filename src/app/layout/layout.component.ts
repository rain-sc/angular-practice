import { Component } from '@angular/core';
import { childRoutes } from './child-routes';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  toolBarHeight = 64;
  routes = childRoutes
}
