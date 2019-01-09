// @format
import { compose, graphql } from 'react-apollo';
import SearchForm from '../components/SearchForm';
import { getSearchTerm, submitSearch, updateSearchTerm } from '../store';

type QueryProps = any;

export default compose(
  graphql(updateSearchTerm, { name: 'updateSearchTerm' }),
  graphql(submitSearch, { name: 'submitSearch' }),
  graphql(getSearchTerm, {
    props: ({ data: { searchTerm } }: QueryProps) => ({
      searchTerm,
    }),
  }),
)(SearchForm);
