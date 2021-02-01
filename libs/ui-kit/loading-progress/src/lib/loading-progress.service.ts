import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingProgressService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public show(): void {
    this._loading$.next(true);
  }

  public hide(): void {
    this._loading$.next(false);
  }
}
