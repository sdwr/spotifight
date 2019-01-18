import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/restaurants', pathMatch: 'full' },
	{ path: 'restaurants', component: SearchComponent, children: [
    		{ path: ':search', component: SearchResultsComponent }
  ]},
  { path: 'add-site', component: AddSiteComponent},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
