import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiSideNavModule } from './ui-side-nav/ui-side-nav.module';
import { DatatableModule } from './datatable/datatable.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DatatableModule,
    UiSideNavModule,
    DashboardModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
