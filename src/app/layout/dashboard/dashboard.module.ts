import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    DashboardRoutingModule,
  ],
  declarations: [],
  entryComponents: [DialogComponent]
})
export class DashboardModule { }
