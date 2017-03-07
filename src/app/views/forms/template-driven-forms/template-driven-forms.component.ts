import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  // object with values for the form fields, if we want any field to have prepopulated value put it here
  formData = {
  id: '',
  name: '',
  email :''
}

//we set submitted equal to false initailly
submitted=false;

onSubmit() {
    //called when user clicks on submit button we set the submitted as true
    this.submitted = true;
   }
  constructor() { }

  ngOnInit() {
  }

}
