import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleConditionPipe } from './article-condition.pipe';
import { PricePipe } from './price.pipe';
import { PriceDecimalPipe } from './price-decimal.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleConditionPipe,
    PricePipe,
    PriceDecimalPipe
  ],
  exports: [
    ArticleConditionPipe,
    PricePipe,
    PriceDecimalPipe
  ]
})
export class ArticlePipeModule { }
