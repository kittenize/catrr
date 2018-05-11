import React from 'react';
import Timeline from '../components/Timeline';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Card from '../components/Card';
import glamorous from 'glamorous';

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
    <Query query={GET_MESSAGES} pollInterval={500}>
        {({loading, error, data}) => {
            if (loading) return <p>Loading</p>;
            if (error) return <Card header="Messages"><glamorous.Div padding='15px'>Error! Are you running node server?</glamorous.Div></Card>;

            return <Timeline messages={data.messages} />;
        }}
    </Query>
);

export default ApolloTimelineContainer;