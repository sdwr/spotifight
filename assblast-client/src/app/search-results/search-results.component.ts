import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchTerm: string;
  @Input() restaurants: Restaurant[];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }
}
