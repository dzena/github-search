import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './search-results-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@github-search/material';
import { UiKitToolbarModule } from '@github-search/ui-kit/toolbar';
import { UiKitSearchFormModule } from '@github-search/ui-kit/search-form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    UiKitToolbarModule,
    UiKitSearchFormModule,
  ],
  declarations: [SearchResultsPageComponent],
})
export class FeatureSharedSearchResultsPageModule {}
