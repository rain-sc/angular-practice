import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const LayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
