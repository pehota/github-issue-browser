// @format
import { compose, DataValue, graphql, OperationOption } from 'react-apollo';
import Content, { IProps } from '../components/Content';
import { findRepo, findRepoIssues, getState, IAppModel } from '../store';

type QueryProps = any;

const getStateQuery = graphql(getState, {
  props: ({ data: { searchTerm, repo } }: QueryProps): Partial<IProps> => ({
    repo,
    searchTerm,
  }),
});

const findRepoQuery = graphql(findRepo, {
  options: ({ searchTerm }: IProps) => ({
    variables: { name: searchTerm },
  }),
  props: ({
    data: { search, error, loading, ...rest },
  }: QueryProps): Partial<IProps> => {
    if (loading) {
      return { loading };
    }
    if (error) {
      return {
        error: error.message,
        loading,
        repo: null,
      };
    }

    if (search.repositoryCount < 1) {
      return {
        issues: [],
        loading,
        repo: null,
      };
    }
    const { nodes } = search;
    const repo = {
      __typename: 'Repo',
      name: nodes[0].name,
      owner: nodes[0].owner.login,
    };
    return { repo, loading };
  },
  skip: ({ repo, searchTerm }: IProps) =>
    repo !== null || searchTerm.trim().length < 3,
});

const findRepoIssuesQuery = graphql(findRepoIssues, {
  options: ({ repo }: IProps) => {
    if (repo) {
      return {
        variables: { ...repo, issueStates: ['OPEN'] },
      };
    }
    return {};
  },
  props: ({
    data: { repository, error, loading, ...rest },
  }: QueryProps): Partial<IProps> => {
    if (loading) {
      return { loading };
    }
    if (error) {
      return {
        error: error.message,
        loading,
      };
    }
    return { issues: repository.issues.nodes, loading };
  },
  skip: ({ repo }: IProps) => repo === null,
});

export default compose(
  getStateQuery,
  findRepoQuery,
  findRepoIssuesQuery,
)(Content);
