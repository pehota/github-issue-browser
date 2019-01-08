// @format
import * as React from 'react';
import {IRepo} from '../store';

interface IProps {
  searchTerm: string;
  updateSearchTerm: (searchTerm: string) => void;
}

const SearchForm: React.SFC<IProps> = ({searchTerm, updateSearchTerm}) => {
  const onSearchInput = e =>
    updateSearchTerm({
      variables: {
        term: e.target.value,
      },
    });
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}>
      <div>
        <label>Repository name: </label>
        <input defaultValue={searchTerm} onInput={onSearchInput} />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
