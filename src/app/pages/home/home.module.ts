// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './home.component';

// Routes
export const routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
