// @format
import React from 'react';
import ReactDOM from 'react-dom';
import {Maybe} from 'tsmonad';
import App from './App';
import {ApolloProvider} from 'react-apollo';
import createClient from './graphql-client';
import * as serviceWorker from './serviceWorker';
import './index.css';

const maybeToken = Maybe.maybe<string>(
  process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
);

ReactDOM.render(
  maybeToken.caseOf({
    nothing: () => <div> Missing token </div>,
    just: (token: string) => (
      <ApolloProvider
        client={createClient({uri: 'https://api.github.com/graphql', token})}>
        <App />
      </ApolloProvider>
    ),
  }),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
