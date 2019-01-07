// @format
import * as React from 'react';
import {graphql, compose} from 'react-apollo';
import {getRepo, IRepo} from '../store';
import SearchForm from '../components/SearchForm';

export default compose(
  graphql(getRepo, {
    props: ({data: {repo}}) => repo,
  }),
)(SearchForm);
