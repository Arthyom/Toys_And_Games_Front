import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../intefaces/product';
import { GlobalGuiService } from '../global-services/global-gui.service';
import { DataLayerService } from '../global-services/data-layer.service';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {

  item_to_del: Product;
  message = 'The element has been removed correctly';
  title = 'Deleting confirmation';
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
    this.hidde();
    this.show_load();


    this.http_request.client.delete(`${environment.global_url}Products/${this.item_to_del.id}`)
    .subscribe( (data:any)=>{
      
     setTimeout(() => {
       this.hidde_load();
       if(data?.ok){
        this.http_request.product_list = this.http_request.product_list.filter( (x)=>x.id != this.item_to_del.id );
        this.show_comfirm();
        this.removed_source.next(true);
       }
       else
        this.launch_error();
     }, 1500);
    },
    ()=>this.error_protocol()
    
    )
  }

  ok(){
 
    setTimeout(() => {
      this.hidde_load();
      this.show_comfirm();
    }, 1500);
  }

  show_comfirm(){
    document.getElementById("modalConfimLaunch").click();
  }

  hidde_confirm(){
    document.getElementById("modalConfirmClose").click();
  }

  show_load(){
    document.getElementById("modelLoadBtn").click();
  }

  hidde_load(){
    
   document.getElementById("modelLoadBtnClose").click();
  
  }

 launch_error(){
  
    document.getElementById("modalErrorLaunch").click();
    setTimeout(() => {
      document.getElementById("modalErrorClose").click();
    }, 5000);

 }

 error_protocol(){
   this.hidde_load();
   this.launch_error();
 }

}
