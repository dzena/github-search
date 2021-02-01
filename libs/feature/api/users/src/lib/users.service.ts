import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchService } from '@github-search/feature/api/search';
import {
  IListQueryParamsModel,
  IUserListModel,
  IUserModel,
} from '@github-search/model';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
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
      filter((params) => 'q' in params),
      switchMap(({ q, page, per_page, sort, order }: IListQueryParamsModel) => {
        // TODO add to http interceptor
        const headers = new HttpHeaders({
          accept: 'application/vnd.github.v3+json',
        });
        const params = new HttpParams({
          fromObject: { q, page, per_page, sort, order },
        });
        return this.http
          .get<IApiUsers>(getEndpoint('search/users'), { params, headers })
          .pipe(
            tap((response) => this.count$.next(response.total_count)),
            map((response) => response.items)
          );
      })
    );
  }

  public getById(id: string): Observable<IUserModel> {
    const headers = new HttpHeaders({
      accept: 'application/vnd.github.v3+json',
    });
    return this.http.get<IUserModel>(getEndpoint(`users/${id}`), { headers });
  }
}
