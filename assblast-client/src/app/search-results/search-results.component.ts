import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Location } from '../models/Location';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchTerm: string;
  @Input() restaurants: Restaurant[];
  mcdonalds: boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }
}
