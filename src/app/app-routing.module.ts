import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './Pages/detail/detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"alta",component:SignupComponent},
  {path:"product/:id",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
