import { InMemoryCache } from 'apollo-boost';

export interface IWithTypeName {
  __typename: string;
}

export interface IRepo extends IWithTypeName {
  __typename: string;
  name: string;
  owner: string;
}

export interface IAppModel {
  repo: IRepo | null;
  searchTerm: string;
}

export interface IWithLocalCache {
  cache: InMemoryCache;
}

export interface IUpdateSearchTerm {
  term: string;
}

export interface IFragments {
  [key: string]: string;
}
