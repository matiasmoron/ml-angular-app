// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { NavSearchComponent } from './nav-search.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavSearchComponent
  ],
  exports: [
    NavSearchComponent
  ],
  providers: [
  ]
})
export class NavSearchModule { }
