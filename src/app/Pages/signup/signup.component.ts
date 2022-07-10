import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //private fb: FormBuilder =newFormBuilder()
  loading = false;
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,

  ) {
    this.myForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.pattern]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.pattern]],
      phone: ["", [Validators.maxLength(12), Validators.pattern("[0-9]{11}")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern]]
    })
  }

  signup() {
    console.log(this.myForm.value)
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;


    if (email !== '' && password !== ' ') {
      this.setLoading();
    } else {
      this.error();
      this.myForm.reset();
    }
  }

  setLoading() {
    this.loading = true;
    this.snackBar.open('Preparese para ingresar...', '',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['home']);
    }, 1500)
  }

  error() {
    this.snackBar.open('Revise los datos ingresados', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }



  ngOnInit(): void {
  }

}
