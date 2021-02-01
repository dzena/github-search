import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingProgressComponent } from './loading-progress.component';
import { MaterialModule } from '@github-search/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LoadingProgressComponent],
  exports: [LoadingProgressComponent],
})
export class UiKitLoadingProgressModule {}
