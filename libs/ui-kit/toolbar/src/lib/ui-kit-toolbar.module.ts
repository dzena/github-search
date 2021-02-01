import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '@github-search/material';
import { RouterModule } from '@angular/router';
import { UiKitLoadingProgressModule } from '@github-search/ui-kit/loading-progress';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UiKitLoadingProgressModule,
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class UiKitToolbarModule {}
