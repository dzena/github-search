import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@github-search/material';
import { SearchResultItemDetailsComponent } from './search-result-item-details.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SearchResultItemDetailsComponent],
})
export class FeatureSharedSearchResultItemDetailsModule {}
