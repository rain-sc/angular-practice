import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout-routing.module";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout.component";
import { CoreuiModule } from "../coreui.module";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    CoreuiModule,
  ],
})
export class LayoutModule { }