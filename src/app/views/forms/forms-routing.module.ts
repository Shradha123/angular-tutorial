import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';
import {ModelDrivenFormsComponent} from './model-driven-forms/model-driven-forms.component';

const routes: Routes = [{
  path:'',
  component :HomeComponent,

  children:[
   {
  path:'',
  redirectTo: 'template-driven-forms',
   pathMatch: 'full'
},
{
  path:'model-driven',
  component: ModelDrivenFormsComponent
},
{
  path:'template-driven-forms',
  component: TemplateDrivenFormsComponent
}
  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
