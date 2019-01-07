// @format
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { defaults, resolvers } from './store';

interface IClientConfig {
  uri: string;
  token: string;
}

export default ({ uri, token }: IClientConfig) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    clientState: {
      defaults,
      resolvers,
    },
    headers: { authorization: `Bearer ${token}` },
    uri,
  });
};
