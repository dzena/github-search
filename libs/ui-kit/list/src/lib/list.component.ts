import { EventEmitter } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { IListItemModel } from '@github-search/model';

@Component({
  selector: 'github-search-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() list: IListItemModel[];
  @Input() totalCount: number;

  @Output() itemDetails = new EventEmitter<IListItemModel>();

  public readonly pageSizeOptions = [10, 25, 50];

  public trackBy(index: number, item: IListItemModel): string {
    return item.id;
  }
}
