import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorQueryReflectorDirective } from './paginator-query-reflector.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginatorQueryReflectorDirective],
  exports: [PaginatorQueryReflectorDirective],
})
export class SharedDirectivesModule {}
