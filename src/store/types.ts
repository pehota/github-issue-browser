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

export interface IWithSearchTerm {
  term: string;
}

export interface IFragments {
  [key: string]: string;
}

export interface IMutationVars<Vars> {
  variables: Vars;
}

export type SendMutationVars<T> = (vars: IMutationVars<T>) => void;

export interface IIssue extends IWithTypeName {
  author: IIssueAuthor | null;
  number: number;
  state: IssueState;
  title: string;
  url: string;
}

export interface IIssueAuthor {
  avatarUrl: string;
  login: string;
}

export enum IssueState {
  Open = 'OPEN',
  Closed = 'CLOSED',
}
