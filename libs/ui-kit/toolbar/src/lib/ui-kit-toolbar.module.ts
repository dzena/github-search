import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '@github-search/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [ToolbarComponent],
  exports:[ToolbarComponent]
})
export class UiKitToolbarModule {}
