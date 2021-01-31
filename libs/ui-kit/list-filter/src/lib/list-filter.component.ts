import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { IListFilterModel } from '@github-search/model';

@Component({
  selector: 'github-search-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilterComponent {
  @Input() options: IListFilterModel[];
  @Input() value: IListFilterModel;

  @Output() filterChanged = new EventEmitter<IListFilterModel>();
}
