import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const Timeline = ({messages}) => {
    return (
        <div>
            {messages.map(({id, ...props}) => {
                return (
                    <Message key={id} id={id} {...props} />
                );
            })}
        </div>
    );
};

Timeline.propTypes = {
    messages: PropTypes.array
};

export default Timeline;