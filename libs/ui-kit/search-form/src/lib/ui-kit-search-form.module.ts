import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form.component';
import { MaterialModule } from '@github-search/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [SearchFormComponent],
  exports: [SearchFormComponent],
})
export class UiKitSearchFormModule {}
