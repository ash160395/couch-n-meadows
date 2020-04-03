import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
