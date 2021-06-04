import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataLayerService } from '../global-services/data-layer.service';
import { Product } from '../intefaces/product';
import { map } from 'rxjs/operators';
import { ModalComponent } from '../modal/modal.component';
import { GlobalGuiService } from '../global-services/global-gui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("modalContenedor",{read: ViewContainerRef, static: true}) modalContainer: ViewContainerRef;
  modalCmp: ComponentRef<ModalComponent>
  
  //random_list : Product[];
  constructor(
    private cmp_resolver: ComponentFactoryResolver,
    public client_http: DataLayerService,
    private gui: GlobalGuiService
  ) { }

  ngOnInit(): void {

    console.log('maodal container ', this.modalContainer);
    const modalFactory = this.cmp_resolver.resolveComponentFactory( ModalComponent );
    this.modalCmp = this.modalContainer.createComponent(modalFactory);

    this.client_http.client.get<Product[]>(`${environment.global_url}Products`)
      //.pipe()
      .subscribe( (data)=> this.client_http.product_list = data );

    this.gui.deleted_emitter$.subscribe(
      (data)=>{ 
        this.modalCmp.instance.item_to_del = data;
        this.modalCmp.instance.show(); 
      }
    )


  }

}
