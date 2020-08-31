import { Baitap2Module } from './baitap2/baitap2.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Baitap1Module } from './baitap1/baitap1.module';

@NgModule({
  // nơi khai báo các component
  declarations: [
    AppComponent,
    DemoComponent
  ],

  // nơi khai báo các module
  //các module do angular định nghĩa : RouterModule, HttpModule, FormModule
  // or do Dev tự tạo: HomeModule, AdminModule
  // ngoại trừ AppModule còn các module khác phải import vào module cha
  imports: [
    BrowserModule, Baitap1Module, Baitap2Module
  ],
  // chưa đụng tới
  providers: [],
  // khai  báo AppComponent  sẽ là component gốc của module
  bootstrap: [AppComponent]
})
export class AppModule { }
