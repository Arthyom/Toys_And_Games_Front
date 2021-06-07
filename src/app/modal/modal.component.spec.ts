import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { DataLayerService } from '../global-services/data-layer.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { product_list, product_response } from '../mocks/product_list';
import { environment } from 'src/environments/environment';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let service: DataLayerService;
  let fake_http_client: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers:[ DataLayerService ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
   // service = TestBed.inject(DataLayerService);
    fixture = TestBed.createComponent(ModalComponent);
    fake_http_client = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataLayerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Shoul show error modals on protocol error call', ()=>{
    //arrange 
    component.show_load();

    //act
    component.error_protocol();
    

    //expect
    setTimeout(() => {
      const modal_error = fixture.debugElement.query(By.css("#modalError")).nativeElement();
      console.log('elelemto eee', modal_error);
      expect(modal_error).toBeTruthy();
    }, 5500);
  });

  fit('shoul show and hide a modal using single methods', ()=>{

    //arrange
    const spy_show  = spyOn(component, 'show_comfirm').and.callThrough();
    const spy_hidde = spyOn(component, 'hidde_confirm').and.callThrough();


    //act
    component.show_comfirm();
    component.hidde_confirm();

    //expect
    expect( spy_show ).toHaveBeenCalled();
    expect( spy_hidde ).toHaveBeenCalled();  
  });

  fit('Should get a ok status response when a valid(when a product is defined) DELETE http request is send', ()=>{
    
    //arrange
    let delete_http_response : any;
    component.item_to_del = product_list[0];
    const url = `${environment.global_url}Products/${component.item_to_del.id}`;
  
    //act
    service.client.delete(url).subscribe( (data)=> delete_http_response = data );
    fake_http_client.expectOne(url).flush(product_response[0]);

    //expect
    expect( delete_http_response.ok ).toBeTruthy();

  });
});
