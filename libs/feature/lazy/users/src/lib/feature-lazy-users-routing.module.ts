import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { SearchResultsPageComponent } from '@github-search/feature/shared/search-results-page';
import { RoutedEntityType } from '@github-search/model';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsPageComponent,
    children: [
      {
        path: '',
        component: UsersPageComponent,
        data: { entityType: RoutedEntityType.users },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureLazyUsersRoutingModule {}
