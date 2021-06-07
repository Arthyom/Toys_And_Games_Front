import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GlobalPipesModule } from '../pipes/globals-pipes.module';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [ FormComponent ],
  imports: [
    
    ModalModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  exports:[
    FormComponent
  ]
})
export class FormModule { }
