import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingProgressService } from './loading-progress.service';

@Component({
  selector: 'github-search-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingProgressComponent implements OnInit {
  public isLoading$ = this._loadingProgressService.loading$;

  constructor(private _loadingProgressService: LoadingProgressService) {}

  ngOnInit(): void {}
}
