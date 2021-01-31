import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MaterialModule } from '@github-search/material';
import { SharedDirectivesModule } from '@github-search/shared/directives';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedDirectivesModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class UiKitListModule {}
