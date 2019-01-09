import * as React from 'react';
import { IIssue } from '../store';
import IssueItem from './IssueItem';

interface IProps {
  issues: IIssue[];
}

const IssuesList: React.SFC<IProps> = ({ issues }) => {
  if (issues.length < 1) {
    return <div>No issues found</div>;
  }
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {issues.map(IssueItem)}
    </ul>
  );
};

export default IssuesList;
