import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const Timeline = ({messages}) => {
    const messageData = messages.map(({id, ...props}) => {
        return (
            <Message key={id} id={id} {...props} />
        );
    });

    return (
        <div className='timeline-container'>
            {messageData}
        </div>
    );
};

Timeline.propTypes = {
    messages: PropTypes.array
};

export default Timeline;