import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component'

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [HomeComponent, ModelDrivenFormsComponent,TemplateDrivenFormsComponent]
})
export class FormsModule { }
