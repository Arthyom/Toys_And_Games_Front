import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../intefaces/product';
import { DataLayerService } from '../global-services/data-layer.service';
import { environment } from 'src/environments/environment';
import { GlobalGuiService } from '../global-services/global-gui.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild("modalContainer", { static: true, read: ViewContainerRef }) cmp_container_ref: ViewContainerRef;
  cmp_ref_typed: ComponentRef<ModalComponent>;
  item_id: string
  item: Product;
  asCard: false;
  
  constructor(
    private ac: ActivatedRoute,
    private http_client: DataLayerService,
    private gui: GlobalGuiService,
    private cmp_factory: ComponentFactoryResolver,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    const general_factory = this.cmp_factory.resolveComponentFactory(ModalComponent);
    this.cmp_ref_typed = this.cmp_container_ref.createComponent(general_factory);

    this.item_id = this.ac.snapshot.paramMap.get('id');
    this.http_client.client.get<Product>(`${environment.global_url}Products/${this.item_id}`)
      .subscribe(data => this.item = data);

    this.gui.deleted_emitter$.subscribe((data) => {
      this.cmp_ref_typed.instance.item_to_del = data;
      this.cmp_ref_typed.instance.show();
    });

    this.cmp_ref_typed.instance.removed$.subscribe( (removed)=> {

      setTimeout(() => {
        const current_url: string = this.router.url
        this.cmp_ref_typed.instance.hidde_confirm();
        if(current_url.includes('view'))
          this.router.navigate(['/home']);
      }, 2500);
     
    } );
  }



}
