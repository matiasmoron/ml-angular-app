import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchProductsService {

  private apiML: string;

  constructor(private http: HttpClient) {
    this.apiML = 'https://api.mercadolibre.com';
  }

  /**
   * Obtain the product from the search
   * @param valueDescription user input of a product search
   */
  getProducts(valueDescription: string): Observable<any> {
    const endpoint = `${this.apiML}/sites/MLA/search?q='${valueDescription}'`;
    
    return this.http.get(endpoint, {})
      .map((response: any | Response) => {
        return this.formatProductsData(response);
      });
  }

  /**
   * Obtain the product extra-information from the server
   * @param idProduct identifier of the product
   */
  getProductDetail(idProduct): Observable<any> {
    const endpoint = `${this.apiML}/items/${idProduct}`;

    return this.http.get(endpoint, {})
      .map((response: any | Response) => {
        return this.formatItemData(response);
      });
  }

  /**
   * Obtain the product description from the server
   * @param idProduct identifier of the product 
   */
  getProductDescription(idProduct): Observable<any> {
    const endpoint = `${this.apiML}/items/${idProduct}/description`;

    return this.http.get(endpoint, {})
      .map((response: any | Response) => {
        
        return response;
      });
  }

  /**
   * Format the data of the products obtained from the request
   * @param response server response
   */
  private formatProductsData(response): Object {
    
    const formatData = {};

    formatData['author'] = {
      name: null,
      lastname: null,
    };
    formatData['categories'] = [];
    formatData['items'] = [];

    response.results.slice(0, 4).forEach(element => {
      const price = String(element.price).split('.');
      
      formatData['items'].push({
        'id': element.id,
        'title': element.title,
        'price': {
          'currency': element.currency_id,
          'amount': price[0],
          'decimals': price[1]
        },
        'picture': element.thumbnail,
        'condition': element.condition,
        'free_shipping': element.shipping.free_shipping,
        'state_name': element.address.state_name
      });
    });

    return formatData;
  }

  /**
   * Format the data of the product obtained 
   * @param response server response
   */
  private formatItemData(response): object {
    const price = String(response.price).split('.');
    
    return  {
      'author': {
        'name': null,
        'lastname': null
      },
      'item': {
        'id': response.id,
        'title': response.title,
        'price': {
          'currency': response.currency_id,
          'amount': price[0],
          'decimals': price[1],
        },
        'picture': response.secure_thumbnail,
        'condition': response.condition,
        'free_shipping': response.shipping.free_shipping,
        'sold_quantity': response.sold_quantity,
      }
    };
  }

}
