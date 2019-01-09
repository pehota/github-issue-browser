// @format
import * as React from 'react';
import { IIssue, IIssueAuthor } from '../store';

interface IWithAuthor {
  author: IIssueAuthor | null;
}

const Avatar: React.SFC<IWithAuthor> = ({ author }) => {
  if (author === null || !author.avatarUrl) {
    return <span />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${author.avatarUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: '4px',
        flex: '0 1 38px',
      }}
    />
  );
};

const AuthorName: React.SFC<IWithAuthor> = ({ author }) => {
  if (author === null) {
    return <span />;
  }
  return <div>{author.login}</div>;
};

const IssueItem: React.SFC<IIssue> = ({
  author,
  number: issueId,
  title,
  url,
}) => {
  return (
    <li key={issueId} style={{ textAlign: 'left', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar author={author} />
        <div
          style={{
            flex: '1',
            paddingLeft: '10px',
          }}
        >
          <div>
            <a className="App-link" href={url} target="_blank">
              {title}
            </a>
          </div>
          <AuthorName author={author} />
        </div>
      </div>
    </li>
  );
};

export default IssueItem;
