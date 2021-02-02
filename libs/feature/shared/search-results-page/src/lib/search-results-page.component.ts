import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IListQueryParamsModel } from '@github-search/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-search-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsPageComponent {
  constructor(private _router: Router, public route: ActivatedRoute) {}

  public search(q: string): void {
    if (!q) {
      this._router.navigate(['/']);
      return;
    }

    const queryParams: Partial<IListQueryParamsModel> = { q, page: '1' };
    this._router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
