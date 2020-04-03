import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Address:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  IsAccepted:number=0;

  constructor(private formBuilder : FormBuilder) { 

    // initialize form group

    this.regiForm = formBuilder.group({
      'FirstName' : [null, Validators.required],  
      'LastName' : [null, Validators.required],  
      'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
      'DOB' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Blog':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      'IsAccepted':[null] 
    });


  }

  // On Change event of toggle button
  onChange(event: any){
    if(event.checked == true){
      this.IsAccepted = 1;
    }
    else {
      this.IsAccepted = 0;
    }
  }

  // When form is submitted
  onFormSubmit(form:NgForm){
    console.log(form);
  }

  ngOnInit() {
  }

}
