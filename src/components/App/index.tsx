// @format
import * as React from "react";
import SearchForm from "../../containers/SearchForm";
import "./styles.css";
import Content from "../../containers/Content";

const App: React.SFC<{}> = () => (
  <div className="App">
    <header className="App-header">
      <h3>Repo Issues Browser</h3>
    </header>
    <SearchForm />
    <Content />
  </div>
);

export default App;
