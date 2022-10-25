/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "mutation VerifyUser($id: uuid!) {\n  update_event_signup_by_pk(pk_columns: {id: $id}, _set: {verified: true}) {\n    id\n  }\n}": types.VerifyUserDocument,
};

export function graphql(source: "mutation VerifyUser($id: uuid!) {\n  update_event_signup_by_pk(pk_columns: {id: $id}, _set: {verified: true}) {\n    id\n  }\n}"): (typeof documents)["mutation VerifyUser($id: uuid!) {\n  update_event_signup_by_pk(pk_columns: {id: $id}, _set: {verified: true}) {\n    id\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;