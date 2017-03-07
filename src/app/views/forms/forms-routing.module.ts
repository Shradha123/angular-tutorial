import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [{
  path:'',
  component :HomeComponent,

  children:[
   {
  path:'',
  redirectTo: 'model',
   pathMatch: 'full'
},
{
  path:'model',
  component: ModelDrivenFormsComponent
 },
{
  path:'templateDriven',
  component:TemplateDrivenFormsComponent
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
