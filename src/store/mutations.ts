import gql from 'graphql-tag';

export const updateSearchTerm = gql`
  mutation updateSearchTerm($term: String!) {
    updateSearchTerm(term: $term) @client {
      repo {
        name
      }
    }
  }
`;
