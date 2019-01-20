import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports: [
    MatTooltipModule
  ]
})
export class MaterialSummaryModule { }
