// @format
import { compose, graphql } from 'react-apollo';
import SearchForm from '../components/SearchForm';
import { getSearchTerm, IRepo, updateSearchTerm } from '../store';

export default compose(
  graphql(updateSearchTerm, { name: 'updateSearchTerm' }),
  graphql(getSearchTerm, {
    props: ({ data: { searchTerm } }) => ({
      searchTerm,
    }),
  }),
)(SearchForm);
