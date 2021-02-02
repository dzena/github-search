import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { RoutedEntityList } from '@github-search/shared/classes';
import { ActivatedRoute } from '@angular/router';
import {
  IListItemModel,
  IListItemTagModel,
  IRepositoryListModel,
  repositoriesListFilterOptions,
} from '@github-search/model';
import { RepositoriesService } from '@github-search/feature/api/repositories';

@Component({
  selector: 'github-search-repositories-page',
  templateUrl: './repositories-page.component.html',
  styleUrls: ['./repositories-page.component.css'],
  providers: [RepositoriesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoriesPageComponent extends RoutedEntityList {
  public readonly filterOptions = repositoriesListFilterOptions;

  constructor(private _route: ActivatedRoute, protected injector: Injector) {
    super(_route, injector);
  }

  protected mapToListItem(repo: IRepositoryListModel): IListItemModel {
    const {
      full_name,
      description,
      language,
      stargazers_count,
      updated_at,
    } = repo;
    const tags: IListItemTagModel[] = [
      { title: 'Language', description: language },
      { title: 'Stargazers', description: stargazers_count },
      {
        title: 'Last updated',
        description: new Date(updated_at).toLocaleDateString(),
      },
    ].filter((t) => !!t.description);

    return { id: full_name, title: full_name, description, tags };
  }
}
