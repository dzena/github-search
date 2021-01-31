export interface IListItemModel {
  id: string;
  title: string;
  description?: string;
  avatar?: string;
  tags?: IListItemTagModel[];
}

export interface IListItemTagModel {
  icon: string;
  description: string;
}
