// @format
import { findRepo, getState } from './queries';
import { IAppModel, IWithLocalCache, IWithSearchTerm } from './types';

export * from './queries';
export * from './mutations';
export * from './types';

export const defaults: IAppModel = {
  repo: null,
  searchTerm: 'react',
};

export const resolvers = () => ({
  Mutation: {
    submitSearch: (
      _: any,
      { term }: IWithSearchTerm,
      { cache }: IWithLocalCache,
    ) => {
      const currentState = cache.readQuery({ query: getState });

      cache.writeData({
        data: {
          ...currentState,
          repo: null,
          searchTerm: term,
        },
      });
    },
    updateSearchTerm: (
      _: any,
      { term }: IWithSearchTerm,
      { cache }: IWithLocalCache,
    ) => {
      const currentState = cache.readQuery({ query: getState });

      cache.writeData({
        data: {
          ...currentState,
          searchTerm: term,
        },
      });
    },
  },
});
