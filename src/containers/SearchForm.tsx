// @format
import {graphql, compose} from 'react-apollo';
import {getSearchTerm, updateSearchTerm, IRepo} from '../store';
import SearchForm from '../components/SearchForm';

export default compose(
  graphql(updateSearchTerm, {name: 'updateSearchTerm'}),
  graphql(getSearchTerm, {
    props: ({data: {searchTerm}}) => ({
      searchTerm,
    }),
  }),
)(SearchForm);
