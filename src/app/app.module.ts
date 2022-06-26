import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { DetailComponent}  from './Pages/detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { ProductComponent } from './Components/product/product.component';

import { ListModule } from './list/list.module';
import { SharedModule } from './Components/shared/shared.module';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { FooterComponent } from './Components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DetailComponent,
    MenuComponent,
    ProductComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ListModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
