import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterComponent } from './list-filter.component';
import { MaterialModule } from '@github-search/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ListFilterComponent],
  exports: [ListFilterComponent],
})
export class UiKitListFilterModule {}
