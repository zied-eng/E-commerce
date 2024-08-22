
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  
  constructor(private http: HttpClient) { }

  grtallproduct(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  grtcategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

filitercategories(keyword:string){

  return this.http.get('https://fakestoreapi.com/products/category/'+ keyword)
}

grtdatiles(id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)
}








}
