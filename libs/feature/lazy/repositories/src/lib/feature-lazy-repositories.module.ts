import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLazyRepositoriesRoutingModule } from './feature-lazy-repositories-routing.module';
import { RepositoriesPageComponent } from './containers/repositories-page/repositories-page.component';
import { UiKitListModule } from '@github-search/ui-kit/list';
import { UiKitListFilterModule } from '@github-search/ui-kit/list-filter';
import { MaterialModule } from '@github-search/material';

@NgModule({
  imports: [
    CommonModule,
    FeatureLazyRepositoriesRoutingModule,
    UiKitListModule,
    UiKitListFilterModule,
    MaterialModule
  ],
  declarations: [RepositoriesPageComponent],
})
export class FeatureLazyRepositoriesModule {}
