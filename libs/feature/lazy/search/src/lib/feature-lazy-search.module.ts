import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeatureLazySearchRoutingModule } from './feature-lazy-search-routing.module';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { MaterialModule } from '@github-search/material';
import { UiKitToolbarModule } from '@github-search/ui-kit/toolbar';
import { UiKitSearchFormModule } from '@github-search/ui-kit/search-form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureLazySearchRoutingModule,
    MaterialModule,
    UiKitToolbarModule,
    UiKitSearchFormModule
  ],
  declarations: [SearchPageComponent],
})
export class FeatureLazySearchModule {}
