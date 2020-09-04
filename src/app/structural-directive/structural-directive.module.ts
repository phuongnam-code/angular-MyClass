import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';



@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, NgSwitchComponent, NgForComponent, NgcontentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
