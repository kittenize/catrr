import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import PropTypes from 'prop-types';
import MessageInput from '../components/MessageInput';

let MessageInputContainer = ({dispatch}) => {
    return (
        <MessageInput onSubmit={message => {
            dispatch(addMessage(message));
        }} />
    );
};

MessageInputContainer.propTypes = {
    dispatch: PropTypes.func
};

MessageInputContainer = connect()(MessageInputContainer);

export default MessageInputContainer;

