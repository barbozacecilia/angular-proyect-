import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//private fb:FormBuilder = new FormBuilder()
myFormLogin:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myFormLogin = this.fb.group({
      email:["", [Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }
  login(){
    console.log(this.myFormLogin.value)
  }

  ngOnInit(): void {
  }

}
