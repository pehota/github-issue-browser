import gql from 'graphql-tag';
import { pipe } from 'ramda';
import { IFragments } from './types';

const wrapWithClientDirective = (fields: string) =>
  `query @client { ${fields} }`;

const buildSelectionFromObject = (obj: IFragments): string =>
  Object.keys(obj).reduce((acc, key) => {
    const fields = key === obj[key] ? key : `${key} {${obj[key]}}`;
    return `
      ${acc}
      ${fields}
    `;
  }, '');

export const createClientQuery = pipe(
  buildSelectionFromObject,
  wrapWithClientDirective,
  gql,
);
