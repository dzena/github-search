import {
  ChangeDetectionStrategy,
  Component,
  Input,
  AfterViewInit,
} from '@angular/core';
import { IListFilterModel, IListQueryParamsModel } from '@github-search/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-search-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilterComponent implements AfterViewInit {
  @Input() options: IListFilterModel[];
  public value: IListFilterModel;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngAfterViewInit() {
    this._setFilterValue();
  }

  public onFilterChanged(filter: IListFilterModel): void {
    const { sort, order } = filter;
    const queryParams: Partial<IListQueryParamsModel> = { sort, order };

    this._router.navigate([], {
      relativeTo: this._route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }

  private _setFilterValue(): void {
    const { sort, order } = this._route.snapshot.queryParams;
    let filter = this.options[0];

    if (sort && order) {
      const found = this.options.find(
        (fo) => fo.sort === sort && fo.order === order
      );
      if (found) {
        filter = found;
      }
    }

    this.value = filter;
  }
}
