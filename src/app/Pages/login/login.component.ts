import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //private fb:FormBuilder = new FormBuilder()
  myFormLogin: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.myFormLogin = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }
  login() {
    console.log(this.myFormLogin.value)
    const email = this.myFormLogin.value.email;
    const password = this.myFormLogin.value.password;

    console.log(email)
    console.log(password)

    if (email == 'test@test.com' && password == '1234567') {
      this.setLoading();
    } else {
      this.error();
      this.myFormLogin.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña ingresados no son válidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  setLoading() {
    this.loading = true;
    this._snackBar.open('Ingresando...', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['home']);
    }, 1500)

  }

  ngOnInit(): void {
  }

}
