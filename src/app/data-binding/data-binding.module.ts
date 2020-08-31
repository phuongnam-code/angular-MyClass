import { DataBindingComponent } from './data-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
