// @format
import * as React from 'react';
import './App.css';
import SearchForm from './containers/SearchForm';
// import IssuesList from './containers/IssuesList';

const App: React.SFC<{}> = () => (
  <div className="App">
    <header className="App-header">
      <h1>Repo Issues Browser</h1>
    </header>
    <SearchForm />
  </div>
);

export default App;
