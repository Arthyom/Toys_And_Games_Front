import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { Product } from '../intefaces/product';
import { DataLayerService } from '../global-services/data-layer.service';
import { environment } from '../../environments/environment';
import { GlobalGuiService } from '../global-services/global-gui.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild("modalContainer",{static:true, read: ViewContainerRef}) cmp_container_ref: ViewContainerRef;
  cmp_ref_typed : ComponentRef<ModalComponent>;
  headers = ['id', 'name', 'ageRestriction', 'price', 'company'];
  
  


  constructor(
    public http_cliente: DataLayerService,
    private gui: GlobalGuiService,
    private cmp_factory: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

    const general_factory = this.cmp_factory.resolveComponentFactory(ModalComponent);
    this.cmp_ref_typed = this.cmp_container_ref.createComponent(general_factory);

    this.http_cliente.client.get<Product[]>(`${environment.global_url}Products`)
      .subscribe( (data)=> this.http_cliente.product_list = data, ()=>this.http_cliente.product_list = [] );

    this.gui.deleted_emitter$.subscribe( (data)=>{
      this.cmp_ref_typed.instance.item_to_del = data;
      this.cmp_ref_typed.instance.show();
    })
  }

}
