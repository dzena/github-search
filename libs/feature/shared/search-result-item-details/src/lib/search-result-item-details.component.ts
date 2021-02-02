import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ISearchResultItemDetailsModel } from '@github-search/model';

@Component({
  selector: 'github-search-search-result-item-details',
  templateUrl: './search-result-item-details.component.html',
  styleUrls: ['./search-result-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultItemDetailsComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ISearchResultItemDetailsModel[],
    private _sheetRef: MatBottomSheetRef
  ) {}

  public closeDetails(): void {
    this._sheetRef.dismiss();
  }
}
