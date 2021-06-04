import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ElementRef, ComponentRef, AfterContentInit } from '@angular/core';
import { Product } from '../intefaces/product';
import { GlobalGuiService } from '../global-services/global-gui.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Product;

  constructor(
    private cmp_resolver: ComponentFactoryResolver,
    private gui: GlobalGuiService
  ) { }

  ngOnInit(): void {
    
  }
  
  

  delete( item ){

    this.gui.emmit_deletion(item);
    


  }

}
