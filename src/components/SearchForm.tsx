// @format
import * as React from 'react';
import {IRepo} from '../store';

const SearchForm: React.SFC<IRepo> = ({name}) => {
  return (
    <form onSubmit={e => { console.debug('submitted'); e.preventDefault(); }}>
      <div>
        <label>Repository name: </label>
        <input defaultValue={name} />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
