import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLazyUsersRoutingModule } from './feature-lazy-users-routing.module';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UiKitListModule } from '@github-search/ui-kit/list';
import { UiKitListFilterModule } from '@github-search/ui-kit/list-filter';

@NgModule({
  imports: [
    CommonModule,
    FeatureLazyUsersRoutingModule,
    UiKitListModule,
    UiKitListFilterModule,
  ],
  declarations: [UsersPageComponent],
})
export class FeatureLazyUsersModule {}
