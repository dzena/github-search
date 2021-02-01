import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingProgressService } from '@github-search/ui-kit/loading-progress';

@Injectable({
  providedIn: 'root',
})
export class HttpLoadingInterceptorService implements HttpInterceptor {
  private _reqCount = 0;

  constructor(private _loadingProgressService: LoadingProgressService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._reqCount++;
    this._loadingProgressService.show();

    return next.handle(req).pipe(
      finalize(() => {
        this._reqCount--;
        if (this._reqCount === 0) {
          this._loadingProgressService.hide();
        }
      })
    );
  }
}
