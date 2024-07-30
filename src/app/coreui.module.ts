import { NgModule } from '@angular/core';

import { 
  AlertModule,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ColDirective,
  ContainerComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  RowComponent,
  TextColorDirective,
  CardGroupComponent,
  InputGroupComponent
 } from '@coreui/angular';

const modules = [
  AlertModule,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ColDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  RowComponent,
  TextColorDirective,
  ContainerComponent,
  CardGroupComponent,
  InputGroupComponent
]

@NgModule({
  imports: modules,
  exports:modules
})

export class CoreuiModule{}