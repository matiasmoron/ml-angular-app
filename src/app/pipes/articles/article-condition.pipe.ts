import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleCondition'
})

/**
 * Transform an article condition value making the traslation to spanish.
 */
export class ArticleConditionPipe implements PipeTransform {

  transform(value: any, args: number): string {
    let condition: string;
    
    switch (value) {
      case 'new':
        condition = 'Nuevo';
        break;
      case 'used':
        condition = 'Usado';
        break;
      default:
        condition = ' ';
    }
    
    return condition;
  }
}
