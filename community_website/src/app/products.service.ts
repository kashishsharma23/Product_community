import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data!:Products[];
  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>('http://localhost:8082/products');
  }

  search(details:Products):Observable<Products[]>{
    return this.httpClient.post<Products[]>('http://localhost:8082/products',details);
  }

  setSearchedResult(data:Products[])
  {
    this.data=data;
  }
  getSearchedResult()
  {
    return this.data;
  }

  getProduct(code:string):Observable<Products>{
    return this.httpClient.get<Products>('http://localhost:8082/products/'+code);
  }
}
