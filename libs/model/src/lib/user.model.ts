export interface IUserListModel {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
  url: string;
}

export interface IUserModel extends IUserListModel {
  name: string;
  followers: number;
  public_repos: number;
  location: string;
}
