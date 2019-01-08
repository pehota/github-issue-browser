// @format
import * as React from 'react';
import SearchForm from '../../containers/SearchForm';
import './styles.css';
// import IssuesList from '../../containers/IssuesList';

const App: React.SFC<{}> = () => (
  <div className="App">
    <header className="App-header">
      <h1>Repo Issues Browser</h1>
    </header>
    <SearchForm />
  </div>
);

export default App;
