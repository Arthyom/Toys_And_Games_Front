import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test the component is created properly
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //check there routeroutlet to render the content
  fit('should have 3 links',()=>{
    
    //arrange
    const predicate = By.css('.nav-item');

    //act
    const elements = fixture.debugElement.queryAll( predicate );

    //expect
    expect(elements.length).toEqual(3);

  });

  fit('Should has the correc names', ()=>{

     //arrange
     const predicate = By.css('.nav-item');
     const links = ['Home', 'List', 'New'];
     
     //act
     const elements = fixture.debugElement.queryAll( predicate ).map( element=>element.nativeElement.innerText );


     //expect
     links.forEach( (link)=>{
      expect( elements ).toContain(link);
     });
 
     
  });


});
