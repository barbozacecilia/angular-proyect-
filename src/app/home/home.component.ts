import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[]

  constructor(
    private productsService: ProductsService
  ) { 
    this.productsService.getAllProducts()
    .subscribe({
      next:(data:any)=>{
        console.log(data);
        this.products=data.results
      },
      error:(error:any)=>{
        console.log(error)
      }}
    )
  }

  ngOnInit(): void {
  }

}
