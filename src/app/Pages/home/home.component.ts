import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Product} from 'src/app/interfaces/ProductsML';
import { Apod } from 'src/app/interfaces/Apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]=[];
  isLoading: boolean=true;
  isError: boolean | string =false;
  results: Apod | null = null;
  
  constructor(
    private productsService: ProductsService
  ) { 
     /* this.productsService.getAllProducts()
      .subscribe({
        next:(data:Product[])=>{
          console.log(data);
          this.products=data
        },
        error:(error:Product[])=>{
          console.log(error)
        }}
      )*/

    this.productsService.getAllProductsProm()
    .then((data:Product[])=>{
      this.products=data
      console.log("data ",data)
    })
   
    this.init()

    /*this.pProducts = this.productsService.getAllProductsProm()*/

  }
  async init(){
    try{
      this.results = await this.productsService.getPicture() 
      console.log("results ", this.results)
      this.isError=false
      this.isLoading=false
    }catch(e){
      console.log(e)
      this.isError=true
    }
  }

  ngOnInit(): void {
  }

  

}
