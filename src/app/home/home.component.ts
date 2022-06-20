import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[]
  productsAsync:any=[]
  pProducts:any=[]

  constructor(
    private productsService: ProductsService
  ) { 
  /*this.productsService.getAllProducts()
    .subscribe({
      next:(data:any)=>{
        console.log(data);
        this.products=data
      },
      error:(error:any)=>{
        console.log(error)
      }}
    )*/

    /*this.productsService.getAllProductsPromise()
    .then(data=>{
      console.log("data",data)
    })
   
    this.init()*/

    this.pProducts = this.productsService.getAllProductsProm()
  }
  /*async init(){
    try{
      const results:any = await this.productsService.getAllProductsProm()
      this.productsAsync = results
      console.log("results ", results)
    }catch(e){
      console.log(e)
    }
  }*/


  ngOnInit(): void {
  }

  

}
