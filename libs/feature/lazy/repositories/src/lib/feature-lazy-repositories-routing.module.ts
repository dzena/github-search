import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsPageComponent } from '@github-search/feature/shared/search-results-page';
import { RoutedEntityType } from '@github-search/model';
import { RepositoriesPageComponent } from './containers/repositories-page/repositories-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsPageComponent,
    children: [
      {
        path: '',
        component: RepositoriesPageComponent,
        data: { entityType: RoutedEntityType.repositories },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureLazyRepositoriesRoutingModule {}
