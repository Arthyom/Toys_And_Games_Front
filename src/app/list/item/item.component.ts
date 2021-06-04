import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../intefaces/product';
import { ActivatedRoute } from '@angular/router';
import { DataLayerService } from '../../global-services/data-layer.service';
import { map } from 'rxjs/operators';
import { GlobalGuiService } from '../../global-services/global-gui.service';

@Component({
  selector: 'tr [app-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() keys = ['Id', 'Name', 'Age', 'Price', 'Compay'];
  @Input() item: Product;


  constructor(
    private http_client : DataLayerService,
    private gui: GlobalGuiService
  ) { }

   ngOnInit() {
   

  }

  delete(){
    this.gui.emmit_deletion(this.item);
  }

}
