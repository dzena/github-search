import { NgModule } from '@angular/core';
import { MaterialModule } from '@github-search/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class SharedHttpInterceptorsModule {}
