import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchService } from '@github-search/feature/api/search';
import { IListQueryParamsModel, IUserModel } from '@github-search/model';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { getEndpoint } from '@github-search/utils/func';

interface IApiUsers {
  total_count: number;
  items: IUserModel[];
}

@Injectable()
export class UsersService extends SearchService<IUserModel> {
  constructor(protected http: HttpClient, private _route: ActivatedRoute) {
    super(http);
  }

  public getSearchResults(): Observable<IUserModel[]> {
    return this._route.queryParams.pipe(
      filter((params) => 'q' in params),
      switchMap(({ q, page, per_page, sort, order }: IListQueryParamsModel) => {
        const headers = new HttpHeaders({
          accept: 'application/vnd.github.v3+json',
        });
        const params = new HttpParams({
          fromObject: { q, page, per_page, sort, order },
        });
        return this.http
          .get<IApiUsers>(getEndpoint('users'), { params, headers })
          .pipe(
            tap((response) => this.count$.next(response.total_count)),
            map((response) => response.items)
          );
      })
    );
  }
}
