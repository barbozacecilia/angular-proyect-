import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
//private fb: FormBuilder =newFormBuilder()
myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) {
    this.myForm =this.fb.group({
      firstName:["",[Validators.required,Validators.minLength(2), Validators.pattern]],
      lastName:["",[Validators.required,Validators.minLength(2), Validators.pattern]],
      phone:[""],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.minLength(6), Validators.maxLength(10), Validators.pattern]]
    })
   }
   registrarse(){
     console.log(this.myForm.value)
   }
  ngOnInit(): void {
  }

}
