import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SiteItem } from '../models/SiteItem';


@Injectable({
  providedIn: 'root'
})
export class DbService {

	restaurantsUrl = "/restaurants";
	siteItemsUrl = "/site-items";

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
  	return this.http.get(this.restaurantsUrl);
  }

  getSiteItems(): Observable<any> {
  	return this.http.get(this.siteItemsUrl);
  }
  addSiteItem(url): void {
    let siteItem: SiteItem = {title: "buttz", creationTimestamp:null, url};
    let response = this.http.post(this.siteItemsUrl, siteItem);
    response.subscribe(x => console.log(x));
  }
}
