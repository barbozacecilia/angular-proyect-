import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) {}
  getAllProducts(){
    return this.httpClient.get("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
  }
create(body:any){
  return this.httpClient.post("https://api.mercadolibre.com/sites/MLA/search?q=iphone",body)
}
update(body:any){
  return this.httpClient.put("https://api.mercadolibre.com/sites/MLA/search?q=iphone",body)
}
delete(){
  return this.httpClient.delete("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
}

}
