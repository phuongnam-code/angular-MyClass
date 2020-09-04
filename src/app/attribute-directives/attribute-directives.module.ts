import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives.component';



@NgModule({
  declarations: [AttributeDirectivesComponent],
  imports: [
    CommonModule
  ],
  exports: [AttributeDirectivesComponent]
})
export class AttributeDirectivesModule { }
