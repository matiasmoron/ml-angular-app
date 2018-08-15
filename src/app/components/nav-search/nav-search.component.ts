import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ml-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.sass'],
})
export class NavSearchComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * 
   * @param valueSearch user input made in the nav-search
   */
  navigatePage(valueSearch) {
    if (valueSearch.length > 1) {
      this.router.navigate(['/items'], { queryParams: { search: valueSearch } });
    }
  }

}
