import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { RoutedEntityList } from '@github-search/shared/classes';
import { ActivatedRoute } from '@angular/router';
import {
  IListItemModel,
  IUserModel,
  usersListFilterOptions,
} from '@github-search/model';
import { UsersService } from '@github-search/feature/api/users';

@Component({
  selector: 'github-search-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent extends RoutedEntityList {
  public readonly filterOptions = usersListFilterOptions;

  constructor(private _route: ActivatedRoute, protected injector: Injector) {
    super(_route, injector);
  }

  protected mapToListItem(item: IUserModel): IListItemModel {
    const { id, avatar_url: avatar, login: title } = item;
    return { id, title, avatar };
  }
}
