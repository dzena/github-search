import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { RoutedEntityList } from '@github-search/shared/classes';
import { ActivatedRoute } from '@angular/router';
import {
  IListItemModel,
  ISearchResultItemDetailsModel,
  IUserListModel,
  IUserModel,
  usersListFilterOptions,
} from '@github-search/model';
import { UsersService } from '@github-search/feature/api/users';
import { tap } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchResultItemDetailsComponent } from '@github-search/feature/shared/search-result-item-details';

@Component({
  selector: 'github-search-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  providers: [UsersService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent extends RoutedEntityList {
  public readonly filterOptions = usersListFilterOptions;

  constructor(
    private _route: ActivatedRoute,
    protected injector: Injector,
    private _matBottomSheet: MatBottomSheet
  ) {
    super(_route, injector);
  }

  public showUserDetails(user: IListItemModel): void {
    this.service
      .getById(user.id)
      .pipe(
        tap((u: IUserModel) => {
          const data = this._mapToDetailsItem(u);
          this._matBottomSheet.open(SearchResultItemDetailsComponent, {
            data,
            hasBackdrop: false,
          });
        })
      )
      .subscribe();
  }

  protected mapToListItem(item: IUserListModel): IListItemModel {
    const { avatar_url: avatar, login: title } = item;
    return { id: title, title, avatar };
  }

  private _mapToDetailsItem(user: IUserModel): ISearchResultItemDetailsModel[] {
    const { followers, location, name, public_repos } = user;
    return [
      { label: 'Followers', value: followers },
      { label: 'Location', value: location },
      { label: 'Name', value: name },
      { label: 'Public repos', value: public_repos },
    ];
  }
}
