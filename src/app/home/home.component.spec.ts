import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GlobalGuiService } from '../global-services/global-gui.service';
import { DataLayerService } from '../global-services/data-layer.service';
import { ComponentFactoryResolver, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let servicio_gui: GlobalGuiService;
  let servicio_data: DataLayerService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[
        GlobalGuiService,
        DataLayerService,
        ComponentFactoryResolver
      ],
      schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

      imports:[
        HttpClientModule
      ]



    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    fixture.debugElement.injector.get(GlobalGuiService);
    fixture.debugElement.injector.get(DataLayerService);
    fixture.debugElement.injector.get(ComponentFactoryResolver);




    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
