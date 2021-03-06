import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

import { SearchService } from '@github-search/feature/api/search';
import {
  IListQueryParamsModel,
  IUserListModel,
  IUserModel,
} from '@github-search/model';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { getEndpoint } from '@github-search/utils/func';

interface IApiUsers {
  total_count: number;
  items: IUserListModel[];
}

@Injectable()
export class UsersService extends SearchService<IUserListModel | IUserModel> {
  constructor(protected http: HttpClient, private _route: ActivatedRoute) {
    super(http);
  }

  public getSearchResults(): Observable<IUserListModel[]> {
    return this._route.queryParams.pipe(
      filter((params: Params) => 'q' in params),
      switchMap((param: Params) => {
        const params = new HttpParams({
          fromObject: param,
        });
        return this.http
          .get<IApiUsers>(getEndpoint('search/users'), { params })
          .pipe(
            tap((response) => this.count$.next(response.total_count)),
            map((response) => response.items),
            catchError(() => EMPTY) // keep the outer observable alive
          );
      })
    );
  }

  public getById(id: string): Observable<IUserModel> {
    return this.http.get<IUserModel>(getEndpoint(`users/${id}`));
  }
}
