import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchProductsService } from '../../services/search/search-products.service';

interface itemsResults {
  author?: object;
  items?: any[];
  categories?: any[];
}

@Component({
  selector: 'ml-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  providers: [SearchProductsService]
})
  
export class ItemListComponent implements OnInit, OnDestroy {

  subscriber;
  searchResult: itemsResults = {}; // Results of items obtained from the user search

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchProductosServ: SearchProductsService) { }

  ngOnInit() {
    this.subscriber = this.route
      .queryParams
      .subscribe(params => {
        this.searchItems(params.search);
      });
    
  }

  // Unsubcribe from the subscription
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  /**
   * 
   * @param valueSearch user input made in the nav-search
   */
  searchItems(valueSearch) {
    if ( valueSearch && valueSearch.length > 1) {
      this.searchProductosServ.getProducts(valueSearch).subscribe(data => {
        this.searchResult = data;
      });
    } else {
      this.router.navigate(['/']);
    }
  }

}
