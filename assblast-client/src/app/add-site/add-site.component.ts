import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../db/db.service';

import { SiteItem } from '../models/SiteItem';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

	siteItems$: Observable<any>;

	constructor(private dbService: DbService) {  
	}

	ngOnInit() {
		this.siteItems$ = this.dbService.getSiteItems();
		this.siteItems$.subscribe(x => console.log(x.message))
	}

	addSite(url: string) {
		console.log(2);
		this.dbService.addSiteItem(url);
	}

}
