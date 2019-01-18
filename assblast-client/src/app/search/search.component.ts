import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Input() searchTerm: string;
  @Input() restaurants: Restaurant[];
  showResults: boolean = false;
	mcdonalds: boolean = false;

  	constructor(private appService: AppService,
                private router: Router,
                private route: ActivatedRoute) { 

      this.route.params.subscribe(params => {
        this.showResults = params['search'] ? true : false;
      });
    }

  	ngOnInit() {
  	}

  	searchRestaurants() {
  		if (this.searchTerm === "mcdonalds") {
  			this.mcdonalds = true;
  		}

      if (this.searchTerm && this.searchTerm.trim() != '') {
        this.router.navigate(['/restaurants', { search: this.searchTerm }]);
      }
      else {
        this.router.navigate(['/restaurants']);
      }
      
  		this.appService.searchRestaurants(this.searchTerm).then((searchResults) => {
        this.restaurants = searchResults;
  		});
  	}
}
