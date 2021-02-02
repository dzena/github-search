export interface IListFilterModel {
  label: string;
  sort: IListFilterUserSort | IListFilterRepositorySort;
  order: 'asc' | 'desc';
}

type IListFilterUserSort = 'followers' | 'repositories' | 'joined' | null;
type IListFilterRepositorySort = 'stars' | 'forks' | 'updated' | null;

export const usersListFilterOptions: IListFilterModel[] = [
  { label: 'Best match', sort: null, order: 'asc' },
  { label: 'Most followers', sort: 'followers', order: 'desc' },
  { label: 'Fewest followers', sort: 'followers', order: 'asc' },
  { label: 'Most recently joined', sort: 'joined', order: 'desc' },
  { label: 'Least recently joined', sort: 'joined', order: 'asc' },
  { label: 'Most repositories', sort: 'repositories', order: 'desc' },
  { label: 'Fewest repositories', sort: 'repositories', order: 'asc' },
];

export const repositoriesListFilterOptions: IListFilterModel[] = [
  { label: 'Best match', sort: null, order: 'asc' },
  { label: 'Most stars', sort: 'stars', order: 'desc' },
  { label: 'Fewest stars', sort: 'stars', order: 'asc' },
  { label: 'Most forks', sort: 'forks', order: 'desc' },
  { label: 'Fewest forks', sort: 'forks', order: 'asc' },
  { label: 'Recently updated', sort: 'updated', order: 'desc' },
  { label: 'Least recently updated', sort: 'updated', order: 'asc' },
];
