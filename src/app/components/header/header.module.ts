// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header.component';
import { NavSearchModule } from '../nav-search/nav-search.module';

@NgModule({
  imports: [
    CommonModule,
    NavSearchModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
  ]
})
export class HeaderModule { }
