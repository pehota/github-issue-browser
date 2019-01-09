// @format
import * as React from 'react';
import { IIssue, IRepo, IWithTypeName } from '../store';
import IssuesList from './IssuesList';

export interface IProps {
  error: string;
  issues: IIssue[];
  loading: boolean;
  repo: IRepo | null;
  searchTerm: string;
}

const Content: React.SFC<IProps> = props => {
  const { loading, error, repo, issues, searchTerm } = props;

  if (searchTerm.length < 3) {
    return <div>Search term is too short</div>;
  }
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (repo === null) {
    return <div>No repo matching "{searchTerm}" found</div>;
  }

  return (
    <div>
      <h4>
        Repository: "{repo.name}" by {repo.owner}
      </h4>
      <IssuesList issues={issues} />
    </div>
  );
};

export default Content;
