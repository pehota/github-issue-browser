// @format
import gql from 'graphql-tag';
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

export const findRepo = gql`
  query findRepoByName($name: String!) {
    search(first: 1, type: REPOSITORY, query: $name) {
      repositoryCount
      nodes {
        ... on Repository {
          name
          owner {
            login
          }
        }
      }
    }
  }
`;

export const findRepoIssues = gql`
  query GetRepoIssues(
    $owner: String!
    $name: String!
    $issueStates: [IssueState!]
  ) {
    repository(owner: $owner, name: $name) {
      issues(first: 10, states: $issueStates) {
        nodes {
          author {
            login
            avatarUrl(size: 32)
          }
          number
          title
          state
          url
        }
      }
    }
  }
`;
