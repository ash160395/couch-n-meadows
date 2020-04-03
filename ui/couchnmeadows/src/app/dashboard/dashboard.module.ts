import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MatGridListModule, MatMenuModule, MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
