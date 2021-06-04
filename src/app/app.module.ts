import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { ListModule } from './list/list.module';
import { FormModule } from './form/form.module';
import { NavModule } from './nav/nav.module';
import { HomeModule } from './home/home.module';
import { ItemCardModule } from './item-card/item-card.module';
import { ViewModule } from './view/view.module';
import { NoImagePipe } from './pipes/no-image.pipe';
import { GlobalPipesModule } from './pipes/globals-pipes.module';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ItemCardModule,
    ViewModule,
    HomeModule,
    ListModule,
    FormModule,
    NavModule,
    GlobalPipesModule,
    
    HttpClientModule
  ],

  
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
