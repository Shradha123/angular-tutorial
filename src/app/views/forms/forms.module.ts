import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ],
  declarations: [HomeComponent, TemplateDrivenFormsComponent, ModelDrivenFormsComponent]
})
export class FormsModule { }
