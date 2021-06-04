import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../intefaces/product';
import { GlobalGuiService } from '../global-services/global-gui.service';
import { DataLayerService } from '../global-services/data-layer.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {

  //@ViewChild('modalLanch') modal_trigger : ElementRef;
  item_to_del: Product;
  removed_source: Subject<boolean> = new Subject<boolean>();
  removed$ = this.removed_source.asObservable();
  constructor(
    private http_request : DataLayerService
  ) { }

  show(){
    document.getElementById("modalLanch").click();
 
  }

  hidde(){
    document.getElementById("modalClose").click();
  }

  delete(){
    this.http_request.client.delete(`${environment.global_url}Products/${this.item_to_del.id}`)
    .subscribe( (data)=>{
      this.http_request.product_list = this.http_request.product_list.filter( (x)=>x.id != this.item_to_del.id );
      this.hidde();
      this.removed_source.next(true);
    })
  }

 
}
