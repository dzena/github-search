import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class SearchService<T> {
  /**
   * Total count of the results.
   */
  protected count$ = new BehaviorSubject<number>(0);

  public get totalCount$(): Observable<number> {
    return this.count$.asObservable();
  }

  protected constructor(protected http: HttpClient) {}

  public abstract getSearchResults(): Observable<T[]>;
  public abstract getById(id: string): Observable<T>;
}
