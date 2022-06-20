import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) {}
  getAllProducts(){
    return this.httpClient.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone").pipe(map((value:any)=>value["results"]))
  }
  getAllProductsPromise(){
    return lastValueFrom(this.httpClient.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone"))
  }
  getAllProductsProm(){
    return lastValueFrom(this.httpClient.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone").pipe(map((value:any)=>value["results"])))
  }
}
