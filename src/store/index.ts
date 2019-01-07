// @format
export * from './queries';

interface IWithTypeName {
  __typename: string;
}
export interface IRepo extends IWithTypeName {
  __typename: string;
  name: string;
  owner: string;
}

export interface IAppModel {
  repo: IRepo | null;
}

export const defaults: IAppModel = {
  repo: {
    __typename: 'Repo',
    name: 'react',
    owner: 'facebook',
  },
};

export const resolvers = () => ({
  Mutation: {},
});
