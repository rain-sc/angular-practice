import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout-routing.module";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout.component";
import { TopNavComponent } from "../components/top-nav/top-nav.component";
import { SideNavComponent } from "../components/side-nav/side-nav.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    MaterialModule
  ],
})
export class LayoutModule { }