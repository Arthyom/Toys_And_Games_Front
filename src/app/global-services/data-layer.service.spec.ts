import { TestBed } from '@angular/core/testing';

import { DataLayerService } from './data-layer.service';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from '../../environments/environment';
import { Product } from '../intefaces/product';
import { product_list, product_response } from '../mocks/product_list';

describe('DataLayerService', () => {
  let service: DataLayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataLayerService);
    httpMock = TestBed.inject(HttpTestingController)
  });



  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Should get data from API end point using GET', ()=>{
    //arrange
    const url = `${environment.global_url}Products`
    
    //act
    service.client.get<Product[]>(url).subscribe( (data)=>{
      expect(data).toBeTruthy();
    })
    const get_request = httpMock.expectOne(url);
    get_request.flush( product_list );

    //asserts
    expect(get_request.request.method).toBe('GET');
  });

  fit('Should remove data from API end point using DELETE', ()=>{
    //arrange
    const url = `${environment.global_url}Products/${product_list[0].id}`;
    
    //act
    service.client.delete(url).subscribe(  (data:any)=>{
      console.log('la data envidada en el put ', data);
      expect(data).toBeTruthy;
      console.log('dada cxcxcxc', data);
    });

    const del_request = httpMock.expectOne(url);

    //asserts
    expect(del_request.request.method).toBe('DELETE');
  });


});
