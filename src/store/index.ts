// @format
import { getState } from './queries';
import { IAppModel, IUpdateSearchTerm, IWithLocalCache } from './types';

export * from './queries';
export * from './mutations';

export const defaults: IAppModel = {
  repo: {
    __typename: 'Repo',
    name: 'react',
    owner: 'facebook',
  },
  searchTerm: 'react',
};

export const resolvers = () => ({
  Mutation: {
    updateSearchTerm: (
      _: any,
      { term }: IUpdateSearchTerm,
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
