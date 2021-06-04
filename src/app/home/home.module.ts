import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemCardModule } from '../item-card/item-card.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ItemCardModule,
    CommonModule
  ]
})
export class HomeModule { }
