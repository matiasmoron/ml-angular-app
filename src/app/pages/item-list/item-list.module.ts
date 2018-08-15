// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ItemListComponent } from './item-list.component';
import { ArticlePipeModule } from '../../pipes/articles/article-pipe.module';

// Routes
export const routes = [
  { path: '', component: ItemListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticlePipeModule
  ],
  declarations: [
    ItemListComponent
  ],
  exports: [
    ItemListComponent
  ],
  providers: [
  ]
})
export class ItemListModule { }
