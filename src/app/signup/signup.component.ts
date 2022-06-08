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
      nombre:["",[Validators.required,Validators.minLength(2), Validators.pattern]],
      correo:["",[Validators.required, Validators.email]],
      clave:["",[Validators.minLength(6)]]
    })
   }

   registrarse(){
     console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}
