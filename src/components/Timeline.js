import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import Card from './Card';

const Timeline = ({messages}) => (
    <Card header="Messages">
        {messages
            .map((message) => (message))
            .sort((a, b) => {
                return b.date - a.date;
            })
            .map(({id, ...props}) => ( <Message key={id} id={id} {...props} /> ))}
    </Card>
);

Timeline.propTypes = {
    messages: PropTypes.array
};

export default Timeline;