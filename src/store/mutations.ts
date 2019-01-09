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

export const submitSearch = gql`
  mutation submitSearch($term: String!) {
    submitSearch(term: $term) @client {
      repo {
        name
      }
    }
  }
`;
