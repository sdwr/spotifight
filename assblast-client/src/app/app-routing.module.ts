import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AddSiteComponent } from './add-site/add-site.component';

const routes: Routes = [
	{ path: 'search', component: SearchResultsComponent },
	{ path: 'add-site', component: AddSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
