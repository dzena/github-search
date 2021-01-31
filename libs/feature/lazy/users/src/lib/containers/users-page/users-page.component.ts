import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { RoutedEntityList } from '@github-search/shared/classes';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IListFilterModel,
  IListItemModel,
  IListQueryParamsModel,
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
  public readonly filterValue = this._getFilterValue();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    protected injector: Injector
  ) {
    super(_route, injector);
  }

  public onFilterChanged(filter: IListFilterModel): void {
    const { sort, order } = filter;
    const queryParams: Partial<IListQueryParamsModel> = { sort, order };

    this._router.navigate([], {
      relativeTo: this._route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  protected mapToListItem(item: IUserModel): IListItemModel {
    const { id, avatar_url: avatar, login: title } = item;
    return { id, title, avatar };
  }

  private _getFilterValue(): IListFilterModel {
    const { sort, order } = this.route.snapshot.queryParams;
    let filter = this.filterOptions[0];

    if (sort && order) {
      const found = this.filterOptions.find(
        (fo) => fo.sort === sort && fo.order === order
      );
      if (found) {
        filter = found;
      }
    }

    return filter;
  }
}
