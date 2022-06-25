import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './Pages/detail/detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
/*import { NotFoundComponent } from './Pages/not-found/not-found.component';*/
import { SignupComponent } from './Pages/signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo: 'home', pathMatch:'full' },
  /*{path:'**', component:NotFoundComponent},*/
  {path:"home", component:HomeComponent},
  {path:"ingresar", component:LoginComponent},
  {path:"alta", component:SignupComponent},
  {path:"telescope/:id", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
