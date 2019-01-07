import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Maybe } from 'tsmonad';
import App from './App';
import createClient from './graphql-client';
import './index.css';
import * as serviceWorker from './serviceWorker';

const maybeToken = Maybe.maybe<string>(
  process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
);

ReactDOM.render(
  maybeToken.caseOf({
    just: token => (
      <ApolloProvider
        client={createClient({ uri: 'https://api.github.com/graphql', token })}
      >
        <App />
      </ApolloProvider>
    ),
    nothing: () => (
      <div> Missing GitHub auth token. Check the env variables. </div>
    ),
  }),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
