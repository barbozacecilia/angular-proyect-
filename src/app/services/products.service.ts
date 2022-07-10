import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apod } from 'src/app/interfaces/Apod';
import { Product, ResponseProduct } from 'src/app/interfaces/ProductsML';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) {}
  /*getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<ResponseProduct>(environment.apiEndPointMLA+"/sites/MLA/search?q=iphone").pipe(map((value:ResponseProduct)=>value.results))
  }*/
  getAllProductsProm(): Promise<Product[]> {
    return lastValueFrom(this.httpClient.get<ResponseProduct>(environment.apiEndPointMLA+"sites/MLA/search?q=telescopio").pipe(map((value:ResponseProduct)=>value.results)))
  }
  getPicture(): Promise<Apod>{
    return lastValueFrom(this.httpClient.get<Apod>(environment.apiEndPointApod+"?api_key=8cxzRvH8CXbIOfw9yT89gzz2fVvxswtdbA6nChUf"))
  }
  getById(id:any):Promise<Apod>{
    return lastValueFrom(this.httpClient.get<Apod>((environment.apiEndPointMLA+"/items/")+id))
  }
}
