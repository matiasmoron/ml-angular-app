import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchProductsService } from '../../services/search/search-products.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Subscription } from 'rxjs/Subscription';

interface itemDetails {
  author?: {
    name: string
    lastname: string
  };
  item?: {
    id: string,
    title: string,
    price: {
      currency: string,
      amount: number,
      decimals: number,
    }
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
  };
}

@Component({
  selector: 'ml-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass'],
  providers: [SearchProductsService]
})
  
export class ItemDetailComponent implements OnInit, OnDestroy {

  subscriber: Subscription;
  itemDetail: itemDetails; // Information from the item

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchProductosServ: SearchProductsService) { }

  ngOnInit() {
    // Receive the id of the product
    this.subscriber = this.route.params.subscribe(params => {
      this.searchProduct(params.id);
    });
  }

  // Unsubcribe from the subscription
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  /**
   * Search for the complete information of a product 
   * @param idProduct from the product to search
   */
  searchProduct(idProduct) {
    if (idProduct) {
      const productDetail = this.searchProductosServ.getProductDetail(idProduct);
      const productDesc = this.searchProductosServ.getProductDescription(idProduct);
      forkJoin([productDetail, productDesc]).subscribe(results => {
        const item = { ...results[0].item, description: results[1].plain_text };
        this.itemDetail = { ...results[0], item };
      });
    } else {
      this.router.navigate(['/']);
    }
  }

}
