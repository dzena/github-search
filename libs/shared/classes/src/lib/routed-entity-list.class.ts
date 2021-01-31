import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  IListFilterModel,
  IListItemModel,
  IUserModel,
  RoutedEntityType,
} from '@github-search/model';
import { SearchService } from '@github-search/feature/api/search';
import { UsersService } from '@github-search/feature/api/users';

type SearchModel = IUserModel;

export abstract class RoutedEntityList {
  public listData$: Observable<{
    items: IListItemModel[];
    totalCount: number;
  }> = this.route.data.pipe(
    tap(({ entityType }) => {
      this.service = this.service = this._listServiceFactory(entityType);
    }),
    switchMap(({ entityType }) => this.getList()),
    switchMap((items) =>
      this.service.totalCount$.pipe(
        map((totalCount) => ({ items, totalCount }))
      )
    )
  );
  public service: SearchService<SearchModel>;

  protected abstract mapToListItem(item: SearchModel): IListItemModel;

  protected constructor(
    protected route: ActivatedRoute,
    protected injector: Injector
  ) {}

  protected getList(): Observable<IListItemModel[]> {
    return this.service
      .getSearchResults()
      .pipe(map((items: SearchModel[]) => items.map(this.mapToListItem)));
  }

  private _listServiceFactory(
    entityType: RoutedEntityType
  ): SearchService<SearchModel> {
    switch (entityType) {
      case RoutedEntityType.users:
        return this.injector.get(UsersService);
    }
  }
}
