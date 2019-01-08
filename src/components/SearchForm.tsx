// @format
import * as React from 'react';
import { IMutationVars, SendMutationVars } from '../store/types';

interface ISearchTermVars {
  term: string;
}

interface IProps {
  searchTerm: string;
  updateSearchTerm: SendMutationVars<ISearchTermVars>;
  submitSearch: SendMutationVars<ISearchTermVars>;
}

const SearchForm: React.SFC<IProps> = ({
  searchTerm,
  submitSearch,
  updateSearchTerm,
}) => {
  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) =>
    updateSearchTerm({
      variables: {
        term: e.currentTarget.value,
      },
    });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Repository name: </label>
        <input defaultValue={searchTerm} onInput={handleSearchInput} />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
