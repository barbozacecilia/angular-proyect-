import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
product:any
isLoading:boolean=true
isError:boolean | string =false
  constructor(
    private activatedRouter: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    const id = this.activatedRouter.snapshot.paramMap.get("id")
    console.log("id ", id)
    this.productsService.getById(id)

    .then(data=>{
      this.product=data
      this.isError=false
    })
    .catch(e=>{console.log(e)
    this.isError=true})
    .finally(()=>{this.isLoading=true})
   }
  

  ngOnInit(): void {
  }

}
