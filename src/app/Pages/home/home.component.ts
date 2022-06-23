import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[]
  productsAsync:any=[]
  pProducts:any=[]
  picture:any=[]
  asteroids:any=[]
  isLoading:boolean=true;
  isError:boolean | string =false;
  
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

    /*this.productsService.getPicture()
    .then(data=>{
      console.log("data ",data)
    })*/
   
    this.init()

    this.pProducts = this.productsService.getAllProductsProm()

  }
  async init(){
    try{
      const results:any = await this.productsService.getPicture()
      this.picture = results
      console.log("results ", results)
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
