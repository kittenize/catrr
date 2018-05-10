import React from 'react';
import Timeline from '../components/Timeline';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';


const GET_MESSAGES = gql`
{
    messages {
        username,
        message,
        date,
        id
    }    
}
`;

const ApolloTimelineContainer = () => (
    <Query query={GET_MESSAGES} pollInterval={5000}>
        {({loading, error, data}) => {
            if (loading) return <p>Loading</p>;
            if (error) return <p>Error</p>;

            return <Timeline messages={data.messages} />;
        }}
    </Query>
);

export default ApolloTimelineContainer;