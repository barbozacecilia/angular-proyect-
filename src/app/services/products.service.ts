import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) {}
  getAllProducts(){
    return this.httpClient.get(environment.apiEndPointMLA+"/sites/MLA/search?q=iphone").pipe(map((value:any)=>value["results"]))
  }
  getAllProductsProm(){
    return lastValueFrom(this.httpClient.get(environment.apiEndPointMLA+"sites/MLA/search?q=telescopio").pipe(map((value:any)=>value["results"])))
  }
  getPicture(){
    return lastValueFrom(this.httpClient.get(environment.apiEndPointApod+"?api_key=8cxzRvH8CXbIOfw9yT89gzz2fVvxswtdbA6nChUf"))
  }
  getById(id:any){
    return lastValueFrom(this.httpClient.get((environment.apiEndPointMLA+"/items/")+id))
  }
}
