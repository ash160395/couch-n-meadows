import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSideNavComponent } from './ui-side-nav.component';
import { MatIconModule , MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [UiSideNavComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule 
    
  ],
  exports : [
    UiSideNavComponent
  ]
})
export class UiSideNavModule { }
