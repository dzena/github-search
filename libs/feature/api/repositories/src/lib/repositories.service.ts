import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { IRepositoryListModel } from '@github-search/model';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { getEndpoint } from '@github-search/utils/func';
import { SearchService } from '@github-search/feature/api/search';

interface IApiRepositories {
  total_count: number;
  items: IRepositoryListModel[];
}

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService extends SearchService<IRepositoryListModel> {
  constructor(protected http: HttpClient, private _route: ActivatedRoute) {
    super(http);
  }

  public getSearchResults(): Observable<IRepositoryListModel[]> {
    return this._route.queryParams.pipe(
      filter((params: Params) => 'q' in params),
      switchMap((param: Params) => {
        const params = new HttpParams({
          fromObject: param,
        });
        return this.http
          .get<IApiRepositories>(getEndpoint('search/repositories'), { params })
          .pipe(
            tap((response) => this.count$.next(response.total_count)),
            map((response) => response.items),
            catchError(() => EMPTY) // keep the outer observable alive
          );
      })
    );
  }

  public getById(id: string): Observable<IRepositoryListModel> {
    return this.http.get<IRepositoryListModel>(getEndpoint(`repos/${id}`));
  }
}
