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
    submitSearch({
      variables: {
        term: searchTerm,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          defaultValue={searchTerm}
          onInput={handleSearchInput}
          placeholder="Type repository name"
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
