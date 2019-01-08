// @format
import {graphql, compose} from 'react-apollo';
import {getRepo, updateSearchTerm, IRepo} from '../store';
import SearchForm from '../components/SearchForm';

export default compose(
  graphql(updateSearchTerm, { name: 'updateSearchTerm' }),
  graphql(getRepo, {
    props: ({data: {repo}}) => repo,
  }),
)(SearchForm);
