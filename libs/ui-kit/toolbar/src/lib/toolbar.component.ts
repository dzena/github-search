import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpInterceptorService } from '@github-search/utils/http-interceptor';

@Component({
  selector: 'github-search-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  constructor(private _httpInterceptor: HttpInterceptorService) {}

  ngOnInit(): void {}
}
