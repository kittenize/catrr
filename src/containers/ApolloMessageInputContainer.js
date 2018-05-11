import React from 'react';

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import MessageInput from '../components/MessageInput';

const UPSERT_MESSAGE = gql`
  mutation upsertMessage($username: String, $id: String!, $message: String, $date: Float) {
    upsertMessage(username: $username, id: $id, message: $message, date: $date) {
      username
      id
      message
      date
    }
  }
`;

const ApolloMessageInputContainer = () => {
    return (
        <Mutation mutation={UPSERT_MESSAGE}>
            {(upsertMessage, {data}) => (
                <MessageInput onSubmit={e => {
                    upsertMessage({
                        variables: e
                    });
                }} />
            )}
        </Mutation>
    );
};

export default ApolloMessageInputContainer;

