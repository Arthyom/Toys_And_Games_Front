import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('app componet', ()=>{

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  });

  beforeEach( ()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  
  // test the app component is created correctly 
  it('should run properly', ()=>{
    expect(component).toBeTruthy();
  });

  
});