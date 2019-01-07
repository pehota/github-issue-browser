import gql from 'graphql-tag';

export const getRepo = gql`
  query {
    repo @client {
      name
      owner
    }
  }
`;
