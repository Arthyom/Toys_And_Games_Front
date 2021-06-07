import { TestBed } from '@angular/core/testing';

import { GlobalGuiService } from './global-gui.service';
import { product_list } from '../mocks/product_list';
import { Product } from '../intefaces/product';

describe('GlobalGuiService', () => {
  let service: GlobalGuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalGuiService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Shoul listen events ', ()=>{
    //arrange and asserts
    service.deleted_emitter$.subscribe( (data)=>expect(data).toBeTruthy() );

    //act
    service.emmit_deletion( product_list[0] );
  });
});
