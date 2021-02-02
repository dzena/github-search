export interface IListItemModel {
  id: string;
  title: string;
  external_url: string;
  description?: string;
  avatar?: string;
  tags?: IListItemTagModel[];
}

export interface IListItemTagModel {
  title: string;
  description: string | number;
}
