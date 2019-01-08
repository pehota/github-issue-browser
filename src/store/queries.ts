import { pick, pipe } from 'ramda';
import { IFragments } from './types';
import { createClientQuery } from './utils';

const fragments: IFragments = {
  repo: `
      __typename
      name
      owner
  `,
  searchTerm: 'searchTerm',
};

const pickFragment = (fragment: string) => pick([fragment], fragments);

const createClientQueryForFragment = pipe(
  pickFragment,
  createClientQuery,
);

export const getState = createClientQuery(fragments);

export const getSearchTerm = createClientQueryForFragment('searchTerm');

export const getRepo = createClientQueryForFragment('repo');
