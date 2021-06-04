import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../intefaces/product';

@Injectable({
  providedIn: 'root'
})
export class GlobalGuiService {

  deleted_emitter_source = new Subject<Product>();
  constructor() { }

  
  public get deleted_emitter$() : Observable<Product> {
    return this.deleted_emitter_source.asObservable();
  }
  
  emmit_deletion(item:Product){
    this.deleted_emitter_source.next(item);
  }
}
