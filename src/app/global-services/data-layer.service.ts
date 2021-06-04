import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../intefaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  private global_product_list: Product[];
  constructor(
    private http_client : HttpClient
  ) { }

  
  get client(){
    return this.http_client;
  }

  
  public set product_list( v: Product[]) {
    this.global_product_list = v;
  }
  

  
  public get product_list() : Product[] {
    return this.global_product_list;
  }
  

  
}
