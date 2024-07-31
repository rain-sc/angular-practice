import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout-routing.module";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout.component";
import { CoreuiModule } from "../coreui.module";
import { IconModule } from "@coreui/icons-angular";
import { DefaultHeaderComponent } from "../components/default-header/default-header.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [
    LayoutComponent,
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    CoreuiModule,
    IconModule,
    MaterialModule
  ],
})
export class LayoutModule { }