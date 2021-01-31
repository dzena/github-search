import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IListQueryParamsModel } from '@github-search/model';

@Component({
  selector: 'github-search-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  public search(q: string): void {
    const queryParams: Partial<IListQueryParamsModel> = { q, per_page: '10' };
    this._router.navigate(['users'], {
      relativeTo: this._route,
      queryParams,
    });
  }
}
