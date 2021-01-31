import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
  Input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-search-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements AfterViewInit {
  @Input() showSearchButton = true;

  @Output() onSubmit = new EventEmitter<string>();

  public value: string;

  constructor(private _route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const { q } = this._route.snapshot.queryParams;
    if (q) {
      this.value = q;
    }
  }
}
