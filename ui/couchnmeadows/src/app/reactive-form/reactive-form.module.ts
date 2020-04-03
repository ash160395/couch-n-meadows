import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, 
  MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, 
  ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule
  ],
  exports: [
    ReactiveFormComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  

  ]
})
export class ReactiveFormModule { }
