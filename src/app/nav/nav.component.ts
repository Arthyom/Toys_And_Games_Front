import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataLayerService } from '../global-services/data-layer.service';
import { Product } from '../intefaces/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private http_client: DataLayerService
  ) { }

  ngOnInit(): void {
  }

  onChange(data:string){
    data =  data.length == 0 ? '*' : data;
    const url= `${environment.global_url}Products/search/${data}`
    this.http_client.client.get<Product[]>( url ).subscribe( (data)=>this.http_client.product_list = data );
  }

}
