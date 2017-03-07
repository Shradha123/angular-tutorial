import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.scss']
})
export class ModelDrivenFormsComponent implements OnInit {
  public loginForm = this.fb.group({
    name :['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  });


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    
  }

}
