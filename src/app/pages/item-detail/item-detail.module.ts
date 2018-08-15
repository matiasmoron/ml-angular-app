// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ItemDetailComponent } from './item-detail.component';
import { ArticlePipeModule } from '../../pipes/articles/article-pipe.module';

// Routes
export const routes = [
  { path: '', component: ItemDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ArticlePipeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ItemDetailComponent
  ],
  exports: [
    ItemDetailComponent
  ],
  providers: [
  ]
})
export class ItemDetailModule { }
